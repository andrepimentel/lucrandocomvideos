import ReactDOM from 'react-dom'
import React from 'react'
import { Header } from '../header';
import { Layout } from '../layout';
import { StoryDois } from '../StoryDois'
import './style.css'

var story1Curtido = false;
var story2Curtido = false;
var story3Curtido = false;
var story4Curtido = false;

var saldo = 120;

function proximoStory() {

    saldo = parseFloat(document.querySelector(".saldo strong").innerHTML);

    console.log(saldo);

    var storyAtual = document.querySelector(".conteudoStory").getAttribute("data-story");

    if(storyAtual == 1) {

        storyAtual = 2;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.add("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/326682312_175450215183685_4497395837222776403_n.jpeg)";

    }

    else if(storyAtual == 2) {

        storyAtual = 3;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.add("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/327122614_1671567729943577_2062008702565804418_n.jpeg)";

    }

    else if(storyAtual == 3) {

        storyAtual = 4;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.add("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/326699292_686840529845253_3124239044224968633_n.jpeg)";

    }

    else if(storyAtual == 4) {

        ReactDOM.render(< StoryDois />, document.getElementById('teste'));

    }

    /* Botão de gostar */

    if(storyAtual == 1) {

        var curtido = story1Curtido;

    }

    else if(storyAtual == 2) {

        var curtido = story2Curtido;

    }

    else if(storyAtual == 3) {

        var curtido = story3Curtido;

    }

    else if(storyAtual == 4) {

        var curtido = story4Curtido;

    }

    console.log(curtido);

    if(curtido == true) {

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Não gosto" class="_ab6-" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';

    }

    else {

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Gosto" class="_ab6-" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>';

    }
    
}

function storyAnterior() {

    saldo = parseFloat(document.querySelector(".saldo strong").innerHTML);

    console.log(saldo);

    var storyAtual = document.querySelector(".conteudoStory").getAttribute("data-story");

    if(storyAtual == 4) {

        storyAtual = 3;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);

        storyAtual = 4;
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.remove("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/327122614_1671567729943577_2062008702565804418_n.jpeg)";

    }

    else if(storyAtual == 3) {

        storyAtual = 2;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);

        storyAtual = 3;
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.remove("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/326682312_175450215183685_4497395837222776403_n.jpeg)";

    }

    else if(storyAtual == 2) {

        storyAtual = 1;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);

        storyAtual = 2;
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.remove("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/327075521_623559526195439_7755987051375749434_n.jpeg)";

    }

    storyAtual = storyAtual - 1;

    /* Botão de gostar */

    if(storyAtual == 1) {

        var curtido = story1Curtido;

    }

    else if(storyAtual == 2) {

        var curtido = story2Curtido;

    }

    else if(storyAtual == 3) {

        var curtido = story3Curtido;

    }

    else if(storyAtual == 4) {

        var curtido = story4Curtido;

    }

    if(curtido == true) {

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Não gosto" class="_ab6-" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';

    }

    else {

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Gosto" class="_ab6-" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>';

    }
    
}

function curtirStory() {

    saldo = parseFloat(document.querySelector(".saldo strong").innerHTML);

    console.log(document.querySelector(".conteudoStory").getAttribute("data-story"));

    var storyAtual = document.querySelector(".conteudoStory").getAttribute("data-story");

    if(storyAtual == 1) {

        var curtido = story1Curtido;

    }

    else if(storyAtual == 2) {

        var curtido = story2Curtido;

    }

    else if(storyAtual == 3) {

        var curtido = story3Curtido;

    }

    else if(storyAtual == 4) {

        var curtido = story4Curtido;

    }

    if(curtido == false) {

        saldo = saldo + 115;

        document.querySelector(".saldo span").innerHTML = "R$ <strong>" + saldo + "</strong>,00";

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Não gosto" class="_ab6-" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';

        if(storyAtual == 1) {

            story1Curtido = true;
    
        }
    
        else if(storyAtual == 2) {
    
            story2Curtido = true;
    
        }
    
        else if(storyAtual == 3) {
    
            story3Curtido = true;
    
        }
    
        else if(storyAtual == 4) {
    
            story4Curtido = true;
    
        }

    }

    else {

        saldo = saldo - 115;

        document.querySelector(".saldo span").innerHTML = "R$ <strong>" + saldo + "</strong>,00";

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Gosto" class="_ab6-" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>';

        if(storyAtual == 1) {

            story1Curtido = false;
    
        }
    
        else if(storyAtual == 2) {
    
            story2Curtido = false;
    
        }
    
        else if(storyAtual == 3) {
    
            story3Curtido = false;
    
        }
    
        else if(storyAtual == 4) {
    
            story4Curtido = false;
    
        }

    }

}

function fecharStory() {

    ReactDOM.render(<><Header /> <Layout /></>, document.getElementById('teste'));

}

export function StoryUm() {

    return (

        <div className="conteudoStory" style={{ backgroundImage: "url('/327075521_623559526195439_7755987051375749434_n.jpeg')" }} data-story="1">
            <div className='proximoStory' onClick={proximoStory} ></div>
            <div className='storyAnterior' onClick={storyAnterior} ></div>
            <div className="topo">
                <div className="contador">
                    <div className="linha ativo" data-id="1"></div>
                    <div className="linha" data-id="2"></div>
                    <div className="linha" data-id="3"></div>
                    <div className="linha" data-id="4"></div>
                </div>
                <div className="conteudo">
                    <img src="/virginia.jpeg"/>
                    <span className="nomeUsuario">virginia</span>   
                    <div className="fechar" onClick={fecharStory}>
                        <svg aria-label="Fechar" class="_ab6-" color="#ffffff" fill="#ffffff" height="20" role="img" viewBox="0 0 24 24" width="20"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                    </div>
                </div> 
            </div>
            <div className="base">
                <div className="conteudo">
                    <input type="text" placeholder="Envie uma mensagem"/>
                    <div className="gosto" onClick={curtirStory}>
                        <svg aria-label="Gosto" class="_ab6-" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                    </div>
                    <div class="direct">
                        <svg aria-label="Direct" class="_ab6-" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                </div>
            </div>
        </div>

    )

}