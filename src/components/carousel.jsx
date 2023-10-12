import React from "react";
import PropTypes from "prop-types";
import { Carousel, ConfigProvider} from 'antd';

import couple1 from "@images/cuple1.jpeg";
import couple2 from "@images/cuple2.jpeg";
import couple3 from "@images/cuple3.jpeg";
import couple4 from "@images/cuple4.jpeg";


const contentStyle = {
  height: '500px',
//   width:"90px",
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
  marginBottom:"0px",
  borderRadius:"15px",
};
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
  <Carousel autoplay style={{width:'90vw'}} dotPosition="bottom" >
    <div>
      <img src={couple1} style={contentStyle} />
    </div>
    <div>
        <img src={couple2} style={contentStyle} />
    </div>
    <div>
        <img src={couple3} style={contentStyle} />
    </div>
    <div>
        <img src={couple4} style={contentStyle} />
    </div>
  </Carousel>
</ConfigProvider>
);
export default App;

App.propTypes = {
  navigate: PropTypes.func,
};
