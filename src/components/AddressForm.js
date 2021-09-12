import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Validation from "./Validation";

import {
  Grid,
  Button,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  error: {
    color: "red",
    lineHeight: 0,
  },
}));

export default function AddressForm() {
  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    batch: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    const { firstName, lastName, phone, address, batch, age } = values;

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, phone, address, batch, age }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid registration failed");
      console.log("Invalid registration failed");
    } else {
      window.alert("registration success and payment completed");
      console.log("registration success");
    }
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={values.firstName}
            onChange={handleChange}
            fullWidth
            autoComplete="given-name"
          />
          {errors.firstName && (
            <p className={classes.error}>{errors.firstName}</p>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={values.lastName}
            onChange={handleChange}
            fullWidth
            autoComplete="family-name"
          />
          {errors.lastName && (
            <p className={classes.error}>{errors.lastName}</p>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="phone no."
            value={values.phone}
            onChange={handleChange}
            fullWidth
            autoComplete="Phone Number"
          />
          {errors.phone && <p className={classes.error}>{errors.phone}</p>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            value={values.address}
            onChange={handleChange}
            fullWidth
            autoComplete="address"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required className={classes.formControl}>
            <InputLabel id="batch">Batch</InputLabel>
            <Select
              labelId="batch"
              id="batch"
              name="batch"
              value={values.batch}
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value={10}>{"6-7AM"}</MenuItem>
              <MenuItem value={20}>{"7-8AM"}</MenuItem>
              <MenuItem value={30}>{"8-9AM"}</MenuItem>
              <MenuItem value={30}>{"5-6PM"}</MenuItem>
            </Select>
            {errors.batch && <p className={classes.error}>{errors.batch}</p>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            type="number"
            value={values.age}
            onChange={handleChange}
            placeholder="18-65"
            InputProps={{ inputProps: { min: 18, max: 65 } }}
          />
          {errors.age && <p className={classes.error}>{errors.age}</p>}
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="amount"
            name="amount"
            label="Amount"
            type="number"
            defaultValue="500"
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: "24px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFormSubmit}
          className={classes.button}
        >
          Submit and Pay
        </Button>
      </div>
    </>
  );
}
