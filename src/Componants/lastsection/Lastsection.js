import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./Lastsection.css";

function Lastsection() {
  return (
    <div className="row">
      <div className="col-md-8 col-lg-8">
        <b> ▼ Market Cap</b>
        <br />
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            style={{ marginLeft: "20px" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Micro"
            />
            <FormControlLabel value="male" control={<Radio />} label="Small" />
            <FormControlLabel value="other" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>
        <div style={{ marginLeft: "30px" }}> Strategy </div>

        <select style={{ marginLeft: "20px" }}>
          <option value="2">Big option buy</option>
          <option value="1" selected class="selected">
            Marger Arbitrage
          </option>
          <option value="3">Short reports</option>
        </select>
      </div>

      <div className="col-lg-4 col-md-4">
        <b> ▼ Risk Level</b>
        <br />
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            style={{ marginLeft: "20px" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Low Risk"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Mid Risk"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Low Risk"
            />
          </RadioGroup>
        </FormControl>
        <div style={{ marginLeft: "30px" }}>Asset </div>

        <select>
          <option value="2">Stocks</option>
          <option value="1" selected class="selected">
            Option
          </option>
          <option value="3">Futures</option>
        </select>
      </div>
    </div>
  );
}

export default Lastsection;
