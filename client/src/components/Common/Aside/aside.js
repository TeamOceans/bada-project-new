import React from "react";
import logo from "./../../../assets/images/BADA_logo_full.png";
import Plus from "./../../../assets/images/plus.png";
import Home from "./../../../assets/images/home.png";
import Playlist from "./../../../assets/images/icon-playlist.png";
import Recent from "./../../../assets/images/icon-most-recent.png";
import Star from "./../../../assets/images/icon-star.png";
import Folder from "./../../../assets/images/icon-folder.png";
import Trash from "./../../../assets/images/icon-trash.png";

import "./../../../css/import.css";

import { useNavigate } from 'react-router-dom';

function AsideList(){
    const navigate = useNavigate()

    // 새 템플릿 추가
    let clickNewTemplate = () => {
        navigate('/record/fileUpload')
    }

    // home
    let clickHome = () => {
        navigate('/')
    }

    // 전체 노트
    let clickAllNote = () => {
        navigate('/record')
    }

    let clickFavoriteNote = () => {
        navigate('/record/favorite')
    }

    // 휴지통
    let clickTrashcanNote = () => {
        navigate('/record/trashcan')
    }

    return( 
        <section className="asideSection">
            <aside>
                <h1>
                    <img src={logo} alt="로고" width="190px" />
                </h1>
                
                <ul>
                    <li onClick={clickNewTemplate}><img src={Plus}/>새 템플릿 추가</li>
                    <li onClick={clickHome}><img src={Home} />Home</li>
                </ul>
                <span>내 노트</span>
                
                <ul>
                    <li onClick={clickAllNote}><img src={Playlist} />전체 노트</li>
                    <li><img src={Recent} />최근 노트</li>
                    <li onClick={clickFavoriteNote}><img src={Star} />즐겨찾는 노트</li>
                </ul>
                <span>공유된 노트</span>
                <ul>
                    <li><img src={Playlist} />협업 노트1</li>
                </ul>
                <span>내 폴더</span>
                <ul>
                    <li><img src={Folder} />기본 폴더</li>
                </ul>
                <span></span>
                <ul>
                    <li onClick={clickTrashcanNote}><img src={Trash} />휴지통</li>
                </ul>
            </aside>
        </section>
    )
}

export default AsideList
