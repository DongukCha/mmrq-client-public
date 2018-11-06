import React, { Component } from "react";

class WitnessHeader extends Component {
  state = {
    currentCity: "",
    currentDistrict: [],
    searchDistrict: "",
    city: [
      "서울",
      "경기",
      "인천",
      "대전",
      "부산",
      "대구",
      "울산",
      "광주",
      "강원",
      "충남",
      "충북",
      "경북",
      "경남",
      "전남",
      "전북",
      "제주"
    ],
    district: {
      서울: [
        "강남구",
        "강북구",
        "강동구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중랑구"
      ],
      경기: [
        "가평군",
        "고양시 덕양구",
        "고양시 일산동구",
        "고양시 일산서구",
        "과천시",
        "광명시",
        "광주시",
        "구리시",
        "군포시",
        "김포시",
        "남양주시",
        "동두천시",
        "부천시 원미구",
        "부천시 소사구",
        "부천시 오정구",
        "성남시 수정구",
        "성남시 중원구",
        "성남시 분당구",
        "수원시 장안구",
        "수원시 권선구",
        "수원시 팔달구",
        "수원시 영통구",
        "시흥시",
        "안산시 단원구",
        "안산시 상록구",
        "안양시 만안구",
        "안양시 동안구",
        "안성시",
        "양주시",
        "양평군",
        "여주시",
        "연천군",
        "오산시",
        "용인시 처인구",
        "용인시 기흥구",
        "용인시 수지구",
        "의왕시",
        "의정부시",
        "이천시",
        "파주시",
        "평택시",
        "포천시",
        "하남시",
        "화성시"
      ],
      인천: [
        "계양구",
        "남구",
        "남동구",
        "동구",
        "부평구",
        "서구",
        "연수구",
        "중구",
        "강화군",
        "옹진군"
      ],
      대전: ["대덕구", "동구", "서구", "유성구", "중구"],
      부산: [
        "강서구",
        "금정구",
        "남구",
        "동구",
        "동래구",
        "부산진구",
        "북구",
        "사상구",
        "사하구",
        "서구",
        "수영구",
        "연제구",
        "영도구",
        "중구",
        "해운대구",
        "기장군"
      ],
      대구: [
        "남구",
        "달서구",
        "동구",
        "북구",
        "서구",
        "수성구",
        "중구",
        "달성군"
      ],
      울산: ["남구", "동구", "북구", "중구", "울주군"],
      광주: ["광산구", "남구", "동구", "북구", "서구"],
      강원: [
        "강릉시",
        "동해시",
        "삼척시",
        "속초시",
        "원주시",
        "춘천시",
        "태백시",
        "고성군",
        "양구군",
        "양양군",
        "영월군",
        "인제군",
        "정선군",
        "철원군",
        "평창군",
        "홍천군",
        "화천군",
        "횡성군"
      ],
      충남: [
        "계롱시",
        "공주시",
        "논산시",
        "당진시",
        "보령시",
        "서산시",
        "아산시",
        "천안시 동남구",
        "천안시 서북구",
        "금산군",
        "부여군",
        "서천군",
        "예산군",
        "청양군",
        "태안군",
        "홍성군"
      ],
      충북: [
        "제천시",
        "청주시 상당구",
        "청주시 서원구",
        "청주시 청원구",
        "청주시 흥덕구",
        "충주시",
        "괴산군",
        "단양군",
        "보은군",
        "영동군",
        "옥천군",
        "음성군",
        "증평군",
        "진천군"
      ],
      경북: [
        "경산시",
        "경주시",
        "구미시",
        "김천시",
        "문경시",
        "상주시",
        "안동시",
        "영주시",
        "영천시",
        "포항시 남구",
        "포항시 북구",
        "고령군",
        "군위군",
        "봉화군",
        "성주군",
        "영덕군",
        "영양군",
        "예천군",
        "울릉군",
        "울진군",
        "의성군",
        "청도군",
        "청송군",
        "칠곡군"
      ],
      경남: [
        "거제시",
        "김해시",
        "밀양시",
        "사천시",
        "진주시",
        "창원시 마산합포구",
        "창원시 마산회원구",
        "창원시 성산구",
        "창원시 의창구",
        "창원시 진해구",
        "통영시",
        "거창군",
        "고성군",
        "남해군",
        "산청군",
        "양산시",
        "의령군",
        "창녕군",
        "하동군",
        "함안군",
        "함양군",
        "합천군"
      ],
      전남: [
        "광양시",
        "나주시",
        "목포시",
        "순천시",
        "여수시",
        "강진군",
        "고흥군",
        "곡성군",
        "구례군",
        "담양군",
        "무안군",
        "보성군",
        "신안군",
        "영광군",
        "영암군",
        "완도군",
        "장성군",
        "장흥군",
        "진도군",
        "함평군",
        "해남군",
        "화순군"
      ],
      전북: [
        "군산시",
        "김제시",
        "남원시",
        "익산시",
        "전주시 덕진구",
        "전주시 완산구",
        "정읍시",
        "고창군",
        "무주군",
        "부안군",
        "순창군",
        "완주군",
        "임실군",
        "장수군",
        "진안군"
      ],
      제주: ["서귀포시", "제주시"]
    }
  };

  citySelect = event => {
    this.setState({
      currentCity: event.target.value
    });
  };

  districtSelect = event => {
    this.setState({
      searchDistrict: event.target.value
    });
  };

  isCurrentCityExist = () => {
    if (this.state.currentCity) {
      return this.state.district[this.state.currentCity].map(
        (district, index) => {
          return (
            <option value={district} key={index}>
              {district}
            </option>
          );
        }
      );
    } else {
      return;
    }
  };

  searchAddress = (event) => {
    event.preventDefault();
    this.props.filterSearch(this.state.currentCity, this.state.searchDistrict);
  };


  render() {
    // console.log(this.state.currentCity)
    // console.log(this.state.searchDistrict)
    // if(this.state.searchDistrict === ){
    //   return <div>loading...</div>
    // }

    return (
      <div>
        <h1 className="witness-header-subtitle">길 잃은 아이를 목격했어요</h1>
        <form className="witness-header-form">
          지역으로 검색해보기:
          <span className="location">
            <select
              id="citySelect"
              onChange={event => {
                this.citySelect(event);
                // this.props.changeLocationCity(event);
              }}
            >
              <option value="">Select One...</option>
              {this.state.city.map((city, index) => {
                return (
                  <option value={city} key={index}>
                    {city}
                  </option>
                );
              })}
            </select>

            <select
              id="districtSelect"
              onChange={event => {
                //  this.props.changeLocationDistrict();
                this.districtSelect(event);
              }}
            >
              <option value="">Select One...</option>
              {this.isCurrentCityExist()}
            </select>
          </span>
          <button
            onClick={this.searchAddress}
            className="witness-header-button"
          >
            검색
          </button>
        </form>
      </div>
    );
  }
}

export default WitnessHeader;
