import React from "react";
import PropTypes from "prop-types";
import { Carousel, ConfigProvider} from 'antd';

import couple1 from "@images/cuple1.jpeg";
import couple2 from "@images/cuple2.jpeg";
import couple3 from "@images/cuple3.jpeg";
import couple4 from "@images/cuple4.jpeg";

import homeStyle from "@styles/home.module.scss";

const contentStyle = {
  height: '500px',
  width:"60vw",
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
  marginBottom:"0px",
  borderRadius:"15px",
};
const imgConStyle = {
  display:"flex",
}
const App = () => (
    <ConfigProvider
  theme={{
    components: {
      Carousel: {
        dotBackgroundColor:"red",
      },
    },
  }}
>
  <Carousel  style={{width:'90vw'}} dotPosition="bottom" >
    <div style={imgConStyle}>
      <img src={couple1} style={contentStyle} />
    </div>
    <div style={imgConStyle}>
        <img src={couple2} style={contentStyle} />
    </div>
    <div style={imgConStyle}>
        <img src={couple3} style={contentStyle} />
    </div>
    <div style={imgConStyle}>
        <img src={couple4} style={contentStyle} />
    </div>
  </Carousel>
</ConfigProvider>
);
export default App;

App.propTypes = {
  navigate: PropTypes.func,
};
