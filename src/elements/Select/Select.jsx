import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import './Select.scss'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function SimpleSelect({text, options, callback, value}) {
  const classes = useStyles()

  const handleChange = (event) => callback(event.target.value)

  return (
    <div className="select">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          label="Age"
        > 
        {
          (options && options.length>0) ?
          options.map(option=>{
            return <MenuItem key={option} value={option}>{option}</MenuItem>
          })
          :
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        }
        </Select>
      </FormControl>
    </div>
  )
}