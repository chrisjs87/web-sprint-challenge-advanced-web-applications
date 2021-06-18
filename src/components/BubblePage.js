import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// import { editColorService, deleteColorService } from '../services/colorServices';

// import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from './../helpers/axiosWithAuth'

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   let colorsArray = fetchColorService()
  //   setColors(colorsArray)
  //   console.log(colors)
  // }, [])

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`http://localhost:5000/api/colors`)
  //     .then(res => {
  //       console.log(res.data)
  //       setColors(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  const fetchColorService = () => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then(res => {
        console.log(res.data)
        setColors(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchColorService()
  }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth().put(`http://localhost:5000/api/colors/${editColor.id}`, editColor)
      .then(res => {
        fetchColorService()
      })
      .catch(err => {
        console.log(err)
      })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`http://localhost:5000/api/colors/${colorToDelete.id}`)
      .then(res => {
        fetchColorService()
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
