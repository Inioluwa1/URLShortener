import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdDeleteForever } from "react-icons/md";
import './Search.css'

export default function Search() {
    const [search, setSearch] = useState("")
    const [searchedUrl, setsearchedUrl] = useState([])
    const [clicked, setClicked] = useState(false)

  //Load stored URLs from localStorage when component mounts
  useEffect(()=> {
    const storedURL = JSON.parse(localStorage.getItem("shortenedURL")) || [];
    setsearchedUrl(storedURL)
    setClicked(false)
  }, [])

  //save updatedURL to localstorage
  const saveToLocalStorage = (updated) => {
    localStorage.setItem("shortenedURL", JSON.stringify(updated))
  }

  //caling the fetch function to shorten the URL
  const handleshortening = async () => {
    if(!search.trim()) {
      alert("Link cannot be empty nor invalid format")
      setSearch("")
      return;} //checks of the search is empty and stops from running if it is empty

    try{
      const response =  await axios.post("https://api.tinyurl.com/create", 
        {
          url: search
        },
        {
          headers: {
            "Authorization" : "Bearer uaXXnEHPkNF1Go5OmXaDOgrMvZdoGz2UMJtCg62svpuI17cqFPDPhEimtHGP",
            "Content-Type" : "application/json"
          }
        }
      )
      const indsearchedUrl = response.data.data.tiny_url;

      const searchingURL = { oldURL: search, newURL: indsearchedUrl } 
      
      setsearchedUrl((prev) => {
        const updated =  [ ...prev, searchingURL];
        saveToLocalStorage(updated)
        return updated
      });
      
      setSearch("")

    }catch(error){
      console.error("Error fetching data;", error)
    }
  }

    //handling submitting to get a shortened URL
    const handleSubmit = () => {

        console.log(searchedUrl)
        handleshortening();
        
    }

    //handling Deleting a URL
    const handleDelete = (index) => {
      const updated = searchedUrl.filter((_,i) => i !== index )
      setsearchedUrl(updated);
      saveToLocalStorage(updated)
    }

    //handling copying to the clipboard
    const copytoClipboard = (url) => {
      navigator.clipboard.writeText(url)
      .then(() => alert("Copied to Clipboard"))
      .catch((error) => {
        alert("Failed to copy")
        console.error("Failed to copy;", error)
      })
      setClicked(true)
    }

  return (
    <div className='Searchcontainer'>
      <div className='Searching'>
        <div className='inputandbutton'>
          <input type='text' placeholder='Shorten a link here...' onChange={(e) => setSearch(e.target.value)} value={search}  />
          <button onClick={()=> handleSubmit()} > Shorten it! </button>
        </div>
        <p className='noerrortext' > Please add a link </p>
      </div>
      {searchedUrl.map((searchedUrl, index) => (
        <div className='Searchedcontent' key={index}>
          <p className='search'> {searchedUrl.oldURL} </p>
          <div className='searchandbutton'>
          <p> {searchedUrl.newURL} </p>
          <button className={clicked? "copied" : "copy"} onClick={() => copytoClipboard(searchedUrl.newURL)}> {clicked? "copied" : "copy"} </button>
          <MdDeleteForever size={34} onClick={() => handleDelete(index)} className='delete' />
        </div>
      </div>
      ))}


    </div>
  )
}
