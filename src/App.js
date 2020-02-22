import MegaEevee  from './Eevee mega evolution.jpg';

import React, { Component } from 'react'
import Iframe from 'react-iframe';
import logo from './logo.svg';
import './App.css';
import { Checkbox, Image, Button, Grid, Dropdown, Form } from 'semantic-ui-react';

import Anakin_Skywalker from './Anakin_Skywalker.jpg';
import Anakin_Vader from './Anakin_Vader.jpg';
import Cherish_Ball from './Cherish Ball.jpg';
import Great_Ball from './Great Ball.jpg';  
import KYLO_vs_VADER from './KYLO REN VS. DARTH VADER IN REAL LIFE.jpg';

import Anakin_Vader_Skywalker from './Anakin_Vader_Skywalker.jpg';
import Sith_Padme from './Sith_Padme.jpg';
import Qui_Gon_Jinn from './Qui_Gon_Jinn.jpg';
import Tahl from './Tahl.jpg';
import Obi_Wan from './Obi-Wan_Kenobi_Jar_Kai.jpg';
import Siri from './Siri_Tachi.jpg';

const danhBaTenStarWars = [
  {
    key: "ten Star Wars",
    value: 0,
    text: "ten Star Wars",
    ten: "ten Star Wars",
    picture: ""
  },
  {
    key: "Anakin",
    value: 1,
    text: "Anakin",
    ten: "Anakin",
    picture: Anakin_Vader_Skywalker
  }, 
  {
    key: "Padme",
    value: 2,
    text: "Padme",
    ten: "Padme",
    picture: Sith_Padme
  },
  {
    key: "Qui-Gon",
    value: 3,
    text: "Qui-Gon",
    ten: "Qui-Gon",
    picture: Qui_Gon_Jinn
  },
  {
    key: "Tahl",
    value: 4,
    text: "Tahl",
    ten: "Tahl",
    picture: Tahl
  },
  {
    key: "Obi-Wan",
    value: 5,
    text: "Obi-Wan",
    ten: "Obi-Wan",
    picture: Obi_Wan
  },
  {
    key: "Siri",
    value: 6,
    text: "Siri",
    ten: "Siri",
    picture: Siri
  }
]

const danhBa1 = [
  { name: 'Dima',
    age: 25,
    country: 'Vietnam',},
  
  { name: 'Alex',
  age: 20,
  country: 'USA'},
  
  { name: 'Anakin',
    age: 30,
    country: 'Naboo'},
]

const danhBa2 = {
  'vaporeon' : { 
    color: 'blue',
    type: 'water'},

  'jolteon' : { 
  color: 'yellow',
  type: 'electric'},

  'flareon' : { 
  color: 'orange',
  type: 'fire'},

  'espeon' : { 
  color: 'pink',
  type: 'psychic'}
}

const database1 = {
  'dima':{
    name: 'Dima',
    address: 'Ha Noi'
  },
  'anakin':{
    name: 'Anakin',
    address: 'Tatooine'
  },
  'padme':{
    name: 'Padme',
    address: 'Naboo'
  },
}

class App extends Component {

  state = {
    anakinSide: 'Jedi',
    tenQuaBong: 'qua-bong',
    tenQuaBong2: 'bong-binh-thuong',
    kichCoPhim: "be",
    kichCoAnh: 'small',
    mauchu: "", 
    anhStarWars: 0, 
    HinhDang: 'square', 
    HinhKichThuoc: 'medium', 
    mauNen: 'black', 
    tenDemDaViet: "",
    tenDaViet: "", 
    tenDiaTriDaViet:""
  }
  
  thayDoiAnakin = () => {
    const { anakinSide } = this.state
    if (anakinSide === 'Jedi'){
      this.setState({anakinSide:'Sith'})
    }
    else {this.setState({anakinSide:'Jedi'})}
  }

  bongNhay = () => {
    const { tenQuaBong } = this.state
    if(tenQuaBong === 'qua-bong-bay-len'){
      this.setState({tenQuaBong: 'qua-bong-bay-ngang'});
    }
    else {this.setState({tenQuaBong: 'qua-bong-bay-len'});}
  }

  phongTo = () => {
    if(this.state.tenQuaBong2 === 'bong-binh-thuong'){ this.setState({tenQuaBong2: 'bong-to'}); }
    
    else if(this.state.tenQuaBong2 === 'bong-to'){ this.setState({tenQuaBong2: 'bong-to qua-bong-nhay'}); }
    
    else { this.setState({tenQuaBong2: 'bong-to qua-bong-di-Chuyen'}) }
  }
  
  PhongTo = () => {
    this.setState({kichCoPhim: "to"})
    this.setState({kichCoAnh: "medium"})
  }
  PhongNho = () => {
    this.setState({kichCoPhim: "bé"})
    this.setState({kichCoAnh: "small"})
  }

  doiMauChuDo = () => {
    this.setState({mauChu: 'red'})
  }
  doiMauChuXanh = () => {
    this.setState({mauChu: 'blue'})
  }

  hienCuaSo1 = (ten) => {
    alert(ten)
  }

  hienCuaSo2 = (e, {value}) => {
    alert(danhBaTenStarWars[value].ten)
    this.setState({anhStarWars: value})
  }
  
  thayDoiHinh = () => {
    if(this.state.HinhDang === 'circular') {
      this.setState({HinhDang: 'square'})
      this.setState({HinhKichThuoc: 'medium'})
      this.setState({mauNen: 'black'})
    }
    else {
      this.setState({HinhDang: 'circular'})
      this.setState({HinhKichThuoc: 'big'})
      this.setState({mauNen: 'grey'})
    }
  }

  choThem = () => {
    const { tenDemDaViet, tenDaViet, tenDiaTriDaViet } = this.state
    database1[tenDemDaViet] = {
      name: tenDaViet,
      address: tenDiaTriDaViet
    }

    this.forceUpdate()
    this.setState({tenDemDaViet: ""})
    this.setState({tenDaViet: ""})
    this.setState({tenDiaTriDaViet: ""})
  }
  xoaBot = (ten) => {
    const { tenDemDaViet } = this.state
    // alert(database1[ten].name + " ở " + database1[ten].address + " (" + ten + ")")
    var coXoaHayKhong  = window.confirm("có xóa " + ten + " không?");
    if (coXoaHayKhong === true){
      delete database1[ten]
      this.forceUpdate()
    }
  }
  xua = (ten) => {
    var personName = window.prompt("Sửa tên " + database1[ten].name + " thành tên gì?", database1[ten].name);
    if(personName != null){
      database1[ten].name = personName
    }

    var personAddress = window.prompt("Sửa địa chỉ " + database1[ten].address + " thành địa chỉ gì?", database1[ten].address);
    if(personAddress != null){
      database1[ten].address = personAddress
    }

    this.forceUpdate()
  }

  thayDoiTenDem = (e, { value }) => {
    this.setState({ tenDemDaViet: value })
  }
  thayDoiTen = (e, { value }) => {
    this.setState({ tenDaViet: value })
  }
  thayDoiDiaTri = (e, { value }) => {
    this.setState({ tenDiaTriDaViet: value })
  }
  
  render() {
    const { anakinSide, tenQuaBong, tenQuaBong2, widthPhim, heightPhim, kichCoPhim, mauChu, kichCoAnh, anhStarWars, HinhDang, 
      HinhKichThuoc,  mauNen, tenDemDaViet, tenDaViet, tenDiaTriDaViet} = this.state
    return (
      <div className="App">

        <header className="App-header" style={{color: "white",

          // backgroundColor: HinhDang === "square"
          //                   ? "black"
          //                   : "grey"
          
          backgroundColor: mauNen

          }}>
          <br/>
          {danhBa1.map(
            (moiNguoi, index) =>
            <div> Người thứ {index+1}, tên là {moiNguoi.name}, {moiNguoi.age} tuổi, sống ở {moiNguoi.country}<br/><br/></div>
          )}
          <br/>
          {Object.keys(danhBa2).map(
            (moiCon, index) => 
            <div>Pokemon thứ {index+1} là {moiCon}, màu {danhBa2[moiCon].color}, type {danhBa2[moiCon].type} <br/><br/></div>
          )}
          <br/>
          <p>
            Light Side<Checkbox toggle hange={this.thayDoiAnakin} />Dark Side
            <br/>
            <Image src={anakinSide === 'Jedi'
              ? Anakin_Skywalker
              : Anakin_Vader
            } size='medium' />
          </p>
          <br/><br/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Learn React
          </a>
          <br/><br/>

          <Image className={tenQuaBong} src={Cherish_Ball} onClick={this.bongNhay}/>

          <br/><br/><br/><br/><br/><br/><br/>

          <Image className={tenQuaBong2} src={Great_Ball} onClick={this.phongTo} />
          <br/><br/><br/><br/>

          <Iframe url='https://www.youtube.com/embed/wLdlwZUO5mo'
            width={kichCoPhim === "to"
              ? "650px"
              : "450px"
            }
            height={kichCoPhim === "to"
              ? "350px"
              : "250px"
            }
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
          <br/>
          <Image src={KYLO_vs_VADER}
            width={kichCoPhim === "to"
              ? "650px"
              : "450px"
            }
            
            height={kichCoPhim === "to"
              ? "350px"
              : "250px"
          }/>
          <br/>
          <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60c5a439-515d-429e-b41a-79b7fae26592/dyakqd-d5225327-1dfd-4c73-a732-f680bb7dbb92.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwYzVhNDM5LTUxNWQtNDI5ZS1iNDFhLTc5YjdmYWUyNjU5MlwvZHlha3FkLWQ1MjI1MzI3LTFkZmQtNGM3My1hNzMyLWY2ODBiYjdkYmI5Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mGtA-nxIlLzuXhWhk4lfiZdpLWiCxbH09N6uzOMPBCY"
          
          size={kichCoAnh}
          
          // size={kichCoPhim === "to"
          // ? 'medium'
          // : 'small'
          // }
          />
          
          <br/><br/>
          <Button color={mauChu} circular icon='search plus' onClick={this.PhongTo}></Button>
          <br/>
          <Button color={mauChu} circular icon='search minus' onClick={this.PhongNho}></Button>

          <br/><br/>
          <Button onClick={this.doiMauChuDo}>red</Button>
          <br/>
          <Button onClick={this.doiMauChuXanh}>blue</Button>

          <br/><br/><br/><br/>

          <Grid columns={6} >
            <Grid.Row>
              <Grid.Column onMouseEnter={() => this.hienCuaSo1('Anakin')}>
                <h1>Anakin</h1>
              </Grid.Column>
              <Grid.Column onMouseEnter={() => this.hienCuaSo1('Padme')}>
                <h1>Padme</h1>
              </Grid.Column>
              <Grid.Column onMouseEnter={() => this.hienCuaSo1('Qui-Gon')}>
                <h1>Qui-Gon</h1>
              </Grid.Column>
              <Grid.Column onMouseEnter={() => this.hienCuaSo1('Tahl')}>
                <h1>Tahl</h1>
              </Grid.Column>
              <Grid.Column onMouseEnter={() => this.hienCuaSo1('Obi-Wan')}>
                <h1>Obi-Wan</h1>
              </Grid.Column>
              <Grid.Column onMouseEnter={() => this.hienCuaSo1('Siri')}>
                <h1>Siri</h1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        
          <br/><br/><br/><br/><br/>

          <Dropdown
          placeholder='ten Star Wars'
          onChange={this.hienCuaSo2}
          options={danhBaTenStarWars} />
          <br/>
          {anhStarWars === ''
            ? null
            : <Image src={danhBaTenStarWars[anhStarWars].picture} size="medium" />
          }

          <br/><br/><br/><br/>

          <Image src={MegaEevee}
            circular={
              HinhDang === "square"
              ? false
              : true
            }

            // size={HinhKichThuoc}
            size={
              HinhDang === "square"
              ? "medium"
              : "big"
            }
            />

          {HinhDang}

          <Button onClick={this.thayDoiHinh} color="red" basic >square or circular</Button>
          <br/><br/><br/><br/><br/><br/><br/>

          <Form inverted>
            <Form.Input inline label='nickName' onChange={this.thayDoiTenDem} value={tenDemDaViet}/>
            <Form.Input inline label='Name' onChange={this.thayDoiTen} value={tenDaViet}/>
            <Form.Input inline label='Address' onChange={this.thayDoiDiaTri} value={tenDiaTriDaViet}/>
          </Form>
          <br/>
          <Button onClick={this.choThem} color="blue">Submit </Button>
          <br/>

          {/* {database1['dima'].name} */}
          {/* {Object.keys(database1).length} */}

          {Object.keys(database1).map (
            (moiTen) =>  
              <div>
                {database1[moiTen].name + " " + "ở" + " " + database1[moiTen].address} /
                <Button onClick={()=>this.xoaBot(moiTen)} color="red">X</Button>
                <Button onClick={()=>this.xua(moiTen)} color="green">!</Button><br/><br/>
              </div>
          )}

          {/* <b>{tenDaViet} ở {tenDiaTriDaViet}</b> */}

          <br/><br/><br/>
        </header>
      </div>
    );
  }
}
export default App;