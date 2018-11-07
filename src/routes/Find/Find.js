import React, { Component } from 'react'

import FindSection1 from "./Find_section1"
import FindButton from "./Find_button"
// import Modal from "./Modal";
import Modal from "../Modal";

import axios from "axios";
import _ from "lodash";

import "./Find.css";

export default class Find extends Component {

  constructor(props) {
    super(props);
    this.state = {
      findData: [],
      currentPageFirstIdx: 0,
      currentPageLastIdx: 1,
      dataLimit: 15,
      numberOfButtons: [],
    };
  }

  
  
  componentDidMount() {
    axios
    // .get(`http://localhost:5000/find?id_lte=${this.state.datalimit}`)
    .get("http://34.217.9.241/find")
    .then(res => {
      this.setState({
        findData: res.data,
        numberOfButtons: _.range(1, Math.ceil(res.data.length / 15) + 1)
      });
    })
    .catch(err => console.log(err));
  }
  
  _pageIdxChange = (pageNumber) =>{
    this.setState({
      currentPageFirstIdx: pageNumber - 1,
      currentPageLastIdx: pageNumber
    });
  };
  
  _beforePageMove = () => {
    if(this.state.currentPageFirstIdx !== 0){
      return this.setState({
        currentPageFirstIdx: this.state.currentPageFirstIdx - 1,
        currentPageLastIdx: this.state.currentPageLastIdx - 1
      })
    }
  }
  
  _nextPageMove = () => {
    if(this.state.currentPageLastIdx !== this.state.numberOfButtons.length){
      return this.setState({
        currentPageFirstIdx: this.state.currentPageFirstIdx + 1,
        currentPageLastIdx: this.state.currentPageLastIdx + 1
      })
    }
  }
  
  render() {
    const dataLimit = this.state.dataLimit;
    const FirstIdx = this.state.currentPageFirstIdx;
    const LastIdx = this.state.currentPageLastIdx;
    if (this.state.findData.length === 0) {
      return <div>loding....</div>;
    }
    return (
      <div className="component_body">
        <div className="find_title">
          <div className="main_section2_plzfind">우리 아이를 찾아주세요</div>
          <div className="main_section2_plzfind_note">가족을 잃은 슬픔에 애타게 기다리고 있습니다</div>
          <div className="main_section2_plzfind_note">많은 관심과 제보 부탁드립니다.</div>
        </div>

        <FindSection1 
          findData={this.state.findData.slice(FirstIdx*dataLimit, LastIdx*dataLimit)} 
          modalData={this.props.modalData}
          modalStatus={this.props.modalStatus}
          modalOpenChange={this.props.modalOpenChange}
          modalDataChange={this.props.modalDataChange}
        />
  
        <div className="buttonForm">
          <button onClick={this._beforePageMove}>〈</button>  
          {this.state.numberOfButtons.map((pageNumber,idx)=>{
            return (
              <FindButton pageIdxChange={this._pageIdxChange} pageNumber={pageNumber} currentPage={LastIdx} key={idx}/>
            )})}
          <button onClick={this._nextPageMove}>〉</button>
          {/* <div>마지막 페이지 입니다</div> */}
        </div>
      </div>
    );
  }
}

