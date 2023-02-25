import ReactDOM from 'react-dom'
import React from 'react'
import { Header } from '../header';
import { Layout } from '../layout';
import { StoryUm } from '../StoryUm'
import './style.css'

var story5Curtido = false;
var story6Curtido = false;
var story7Curtido = false;
var story8Curtido = false;

var saldo = 120;

function proximoStory() {

    saldo = parseFloat(document.querySelector(".saldo strong").innerHTML);

    console.log(saldo);

    var storyAtual = document.querySelector(".conteudoStory").getAttribute("data-story");

    if(storyAtual == 5) {

        storyAtual = 6;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.add("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/327008623_623650829772783_851107959832962888_n.jpeg)";

    }

    else if(storyAtual == 6) {

        storyAtual = 7;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.add("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/327291262_8620295151376962_6780051113918036206_n.jpeg)";

    }

    else if(storyAtual == 7) {

        storyAtual = 8;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.add("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/326904333_566169678757100_3204612228319854831_n.jpeg)";

    }

    /* Botão de gostar */

    if(storyAtual == 5) {

        var curtido = story5Curtido;

    }

    else if(storyAtual == 6) {

        var curtido = story6Curtido;

    }

    else if(storyAtual == 7) {

        var curtido = story7Curtido;

    }

    else if(storyAtual == 8) {

        var curtido = story8Curtido;

    }

    //console.log(curtido);

    if(curtido == true) {

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Não gosto" class="_ab6-" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';

    }

    else {

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Gosto" class="_ab6-" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>';

    }

    console.log(curtido);
    
}

function storyAnterior() {

    saldo = parseFloat(document.querySelector(".saldo strong").innerHTML);

    console.log(saldo);

    var storyAtual = document.querySelector(".conteudoStory").getAttribute("data-story");

    if(storyAtual == 8) {

        storyAtual = 7;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);

        storyAtual = 8;
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.remove("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/327291262_8620295151376962_6780051113918036206_n.jpeg)";

    }

    else if(storyAtual == 7) {

        storyAtual = 6;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);

        storyAtual = 7;
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.remove("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/327008623_623650829772783_851107959832962888_n.jpeg)";

    }

    else if(storyAtual == 6) {

        storyAtual = 5;
        document.querySelector(".conteudoStory").setAttribute("data-story",storyAtual);

        storyAtual = 6;
        document.querySelector(".linha[data-id='" + storyAtual + "']").classList.remove("ativo");;
        document.querySelector(".conteudoStory").style.backgroundImage = "url(/326794328_1146595779383017_6171422253996173980_n.jpeg)";

    }

    else if(storyAtual == 5) {

        ReactDOM.render(< StoryUm />, document.getElementById('teste'));

    }

    storyAtual = storyAtual - 1;

    /* Botão de gostar */

    if(storyAtual == 5) {

        var curtido = story5Curtido;

    }

    else if(storyAtual == 6) {

        var curtido = story6Curtido;

    }

    else if(storyAtual == 7) {

        var curtido = story7Curtido;

    }

    else if(storyAtual == 8) {

        var curtido = story8Curtido;

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

    if(storyAtual == 5) {

        var curtido = story5Curtido;

    }

    else if(storyAtual == 6) {

        var curtido = story6Curtido;

    }

    else if(storyAtual == 7) {

        var curtido = story7Curtido;

    }

    else if(storyAtual == 8) {

        var curtido = story8Curtido;

    }

    if(curtido == false) {

        saldo = saldo + 115;

        document.querySelector(".saldo span").innerHTML = "R$ <strong>" + saldo + "</strong>,00";

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Não gosto" class="_ab6-" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>';

        if(storyAtual == 5) {

            story5Curtido = true;
    
        }
    
        else if(storyAtual == 6) {
    
            story6Curtido = true;
    
        }
    
        else if(storyAtual == 7) {
    
            story7Curtido = true;
    
        }
    
        else if(storyAtual == 8) {
    
            story8Curtido = true;
    
        }

    }

    else {

        saldo = saldo - 115;

        document.querySelector(".saldo span").innerHTML = "R$ <strong>" + saldo + "</strong>,00";

        document.querySelector(".gosto").innerHTML = '<svg aria-label="Gosto" class="_ab6-" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>';

        if(storyAtual == 5) {

            story5Curtido = false;
    
        }
    
        else if(storyAtual == 6) {
    
            story6Curtido = false;
    
        }
    
        else if(storyAtual == 7) {
    
            story7Curtido = false;
    
        }
    
        else if(storyAtual == 8) {
    
            story8Curtido = false;
    
        }

    }

}

function fecharStory() {

    ReactDOM.render(<><Header /> <Layout /></>, document.getElementById('teste'));

}

export function StoryDois() {

    return (

        <div className="conteudoStory" style={{ backgroundImage: "url('/326794328_1146595779383017_6171422253996173980_n.jpeg')" }} data-story="5">
            <div className='proximoStory' onClick={proximoStory} ></div>
            <div className='storyAnterior' onClick={storyAnterior} ></div>
            <div className="topo">
                <div className="contador">
                    <div className="linha ativo" data-id="5"></div>
                    <div className="linha" data-id="6"></div>
                    <div className="linha" data-id="7"></div>
                    <div className="linha" data-id="8"></div>
                </div>
                <div className="conteudo">
                    <img src="/lucasranngel.jpeg"/>
                    <span className="nomeUsuario">lucasranngel</span>   
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