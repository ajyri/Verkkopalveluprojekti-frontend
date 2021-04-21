import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router';
import Edit_categories from './Edit_categories.js';

const URL = 'http://localhost/verkkopalvelu/';

export default function Admin({admin}) {
  if (admin===null) {
    return <Redirect to="/login" />
    }
    return (
        <>  
          <Edit_categories/>
        </>
    )
}
