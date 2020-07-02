import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            password: ''
        };
    }

    handleId = e => {
        this.setState({
            id: e.target.value
        });
    };

    handlePassword = e => {
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const login_info = {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{
                "Content-Type": "application/json"
            }
        };
        fetch("http://localhost:5000/login", login_info)
        .then(res => {
            return res.json();
        })
        .then(json => {
            if (json.success === true){
                alert("로그인되었습니다");
            
                window.localStorage.setItem('userInfo', JSON.stringify(json))
                this.setState({
                    id: json.id,
                    password: json.password
                });
                
                if (json.status === '학생'){
                    this.props.history.push("/student");
                }
                else{
                    this.props.history.push("/professor");
                }

                var fs = require('browserify-fs');
                fs.mkdir('/home', function() {
                    fs.writeFile('/home/id.txt', json.id, function() {
                        fs.readFile('/home/id.txt', 'utf-8', function(err, data) {
                            console.log(data);
                        });
                    });
                });
        }
            else{
                alert("아이디 혹은 비밀번호를 확인하세요");
            }
        }
        );
    }

    render() {
        return (
          <Router>
            <div>
              <form onSubmit={this.handleSubmit}>
                {/* 이메일 인풋창 */}
                <div>
                  <span>학번</span>
                  <input
                    placeholder="학번을 입력하세요"
                    value={this.state.id}
                    onChange={this.handleId}
                  />
                </div>
                {/* 비밀번호 인풋 */}
                <div>
                  <span>비밀번호</span>
                  <input
                    placeholder="비밀번호를 입력하세요"
                    value={this.state.password}
                    onChange={this.handlePassword}
                    type="password"
                  />
                </div>
                <div>
                  {/* 로그인버튼 , 회원가입버튼*/}
                  <button type="submit">로그인</button>
                  {/* 회원가입 버튼 클릭 -> /signup페이지로 이동 */}
                </div>
              </form>
            </div>
          </Router>
        );
    }
}

export default Login;