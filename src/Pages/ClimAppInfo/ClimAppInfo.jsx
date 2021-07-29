import React from 'react'
import {Bakground, ContainerMax} from '../../global.style'
import { ContainerI, Btn, Info, ConInf, Contacto, Imagen} from './ClimApp.style'
import { IoHome } from 'react-icons/io5'
import { GrFacebook, GrLinkedin } from 'react-icons/gr'
import { GoMarkGithub } from 'react-icons/go'

const ClimAppInfo = () => {
    return (
        <Bakground>
            <ContainerMax>
                <ContainerI>
                    <Btn to='/'><IoHome/></Btn>
                    <Info>
                        <ConInf>    
                        <h2>¿Qué es ClimApp?</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas ipsum distinctio quia dicta nihil, doloribus excepturi quas architecto, sit magnam labore repellendus facere possimus vero accusamus odio officiis provident?</span>
                            <h3>Un projecto de Henry</h3>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas ipsum distinctio quia dicta nihil, doloribus excepturi quas architecto, sit magnam labore repellendus facere possimus vero accusamus odio officiis provident?</span>
                            <h3>Contactame:</h3>
                            <Contacto>
                                <a  target="blank" href="https://www.facebook.com/profile.php?id=100001808171383" rel="face"><GrFacebook/></a>
                                <a  target="blank" href="https://github.com/ArmandLord" rel="github"><GoMarkGithub/></a>
                                <a  target="blank" href="https://www.linkedin.com/in/armando-perez-5a498a213/" rel="linkeInd"><GrLinkedin/></a>
                            </Contacto>
                        </ConInf>
                        <Imagen>
                            {/* <img src="https://www.pngkey.com/png/full/964-9648013_vinilo-pared-bola-del-mundo-bola-del-mundo.png" alt="mundo"/> */}
                        </Imagen>
                    </Info>
                </ContainerI>
            </ContainerMax>
        </Bakground>
    )
}

export default ClimAppInfo
