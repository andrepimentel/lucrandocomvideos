import ReactDOM from 'react-dom'
import React from 'react'

import { StoryUm } from '../StoryUm'
import { StoryDois } from '../StoryDois'
import { render } from '@testing-library/react'
import './style.css'

function abrirStoryUm() {

    ReactDOM.render(< StoryUm />, document.getElementById('teste'));

}

function abrirStoryDois() {

    ReactDOM.render(< StoryDois />, document.getElementById('teste'));

}

export function Story() {
    return (
        <div className="container">
            <div className='user-elements' onClick={abrirStoryUm}>
                <div>
                <img className="image-user-story" src="/virginia.jpeg" alt="virginia" />
                </div>

                <span>virginia</span>
            </div>
            <div className='user-elements' onClick={abrirStoryDois}>
                <div>
                <img className="image-user-story" src="/lucasranngel.jpeg" alt="Perfil" />
                </div>

                <span>lucasrann...</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src="/luisasonza.jpeg" alt="Perfil" />
                </div>

                <span>luizazonza</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src="/anitta.jpeg" alt="Perfil" />
                </div>

                <span>anitta</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src="/viihtube.jpeg" alt="Perfil" />
                </div>

                <span>viihtube</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src="/alvxaro.jpeg" alt="Perfil" />
                </div>

                <span>alvxaro</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src="/vanessalopesr_.jpeg" alt="Perfil" />
                </div>

                <span>vanessal...</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src="/choquei.jpeg" alt="Perfil" />
                </div>

                <span>choquei</span>
            </div>
            <div className='user-elements'>
                <div>
                <img className="image-user-story" src="/zefelipecantor.jpeg" alt="Perfil" />
                </div>

                <span>zefelipe...</span>
            </div>
        </div>
    )
}