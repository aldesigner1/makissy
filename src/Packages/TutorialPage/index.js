import React, { Component } from 'react';
import './tutoriel.scss';

export default class Tutoriel extends Component {
    render() {
        return (
            <div className="principalTuto">
                <div className="listeTuto">
                    <ol>
                        <li style={{ "box-shadow": "0 0 10px #ff4400" }}>

                            <div className="imageTuto">
                                <img src="Assets\images\Miniature_Makissy.png" width="100px" alt="miniature tutotriel" />
                            </div>
                            <div className="titreTuto">
                                <label htmlFor="">Reprenons depuis le début.</label>
                            </div>
                            <div className="filtreTuto">
                            </div>
                        </li>
                        <li>

                            <div className="imageTuto">
                                <img src="Assets\images\planet-4124063.jpg" width="100px" alt="miniature tutotriel" />
                            </div>
                            <div className="titreTuto">
                                <label htmlFor="">Urgence !</label>
                            </div>
                            <div className="filtreTuto">
                            </div>
                        </li>
                        <li>

                            <div className="imageTuto">
                                <img src="Assets\images\paper-3033204.jpg" width="100px" alt="miniature tutotriel" />
                            </div>
                            <div className="titreTuto">
                                <label htmlFor="">StormBreakers</label>
                            </div>
                            <div className="filtreTuto">
                            </div>
                        </li>
                        <li>

                            <div className="imageTuto">
                                <img src="Assets\images\spaghetti-2931846_1920.jpg" width="100px" alt="miniature tutotriel" />
                            </div>
                            <div className="titreTuto">
                                <label htmlFor="">Shokugeki</label>
                            </div>
                            <div className="filtreTuto">
                            </div>
                        </li>
                        <li>

                            <div className="imageTuto">
                                <img src="Assets\images\data_book_exploration_by_gleb.gif" width="100px" alt="miniature tutotriel" />
                            </div>
                            <div className="titreTuto">
                                <label htmlFor="">The Web in Africa</label>
                            </div>
                            <div className="filtreTuto">
                            </div>
                        </li>
                    </ol>
                </div>

                <div className="contentTuto">
                    <h2 className="titrePrincipalTuto">REPRENONS DEPUIS LE DEBUT</h2>
                    <img src="Assets/images/galerie/depart.png" className="illustrationTuto" alt="illustration depart" />
                    <p className="paragrapheTuto">En tant que personne faisant du commerce en Afrique, être une référence sur le marché ou simplement faire grandir son business, implique de le faire à la fois de manière traditionnelle, mais aussi en utilisant les ‘‘nouvelles technologies’’… Et malheureusement, c’est là que tout se gâte ! Entre l’internet, le niveau de vie local et le marketing digital ; eh bien, commençons par comprendre les bases de ce type de commerce qui se fait en ligne.</p>
                    <ol>
                        <li>
                            <h3 className="sousTitreTuto">DU COMMERCE… MAIS EN LIGNE?</h3>
                            <img src="Assets/images/galerie/commerce en ligne.png" className="illustrationTuto" alt="illustration" />
                            <p className="paragrapheTuto">De manière traditionnelle, faire du commerce revient à vendre et à acheter. Faire du commerce sur internet, ou plus communément du ‘‘e-commerce’’, c’est pareil ; du moins à quelques différences près :</p>
                            <blockquote cite="http://">

                            </blockquote>
                            <div className="exampleTuto">

                            </div>
                            <ol className="enumerationTuto">
                                <li className="elementEnumereTuto"> <i className="fas fa-check symbol"></i> <span>C’est plus simple à réaliser mais moins évident à comprendre;</span> </li>
                                <li className="elementEnumereTuto"> <i className="fas fa-check symbol"></i>	<span>C’est bien plus libre et vaste en tant que domaine de vente, mais d’autant plus rude en termes de concurrence et d’individualisme;</span></li>
                                <li className="elementEnumereTuto"><i className="fas fa-check symbol"></i> <span>Aussi, chez nous, c’est la forme de commerce la moins crédibilisée, mais la plus enviée…</span> </li>
                            </ol>
                            <p className="paragrapheTuto">Bref, la liste est longue… Alors essayez de peser le pour et le contre, car lancer un commerce peut se décider ensemble, mais il s’assume souvent seul.</p>
                        </li>

                        <li>
                            <h3 className="sousTitreTuto">AVANT DE SE LANCER !</h3>
                            <img src="Assets/images/galerie/avant de commencer.png" className="illustrationTuto" alt="illustration" />
                            <p className="paragrapheTuto">Ce serait vous mentir de dire qu’il existe LA Méthode à suivre pour démarrer son business en ligne… La vérité est que, tout dépend de vous ! Le mode de vie et l’entourage en passant par la détermination et les prédispositions à le faire, font que l’approche qui marcherait pour vous, puisse ne pas fonctionner pour une autre personne : C’est donc là toute la difficulté et la délicatesse du travail de conseiller marketing.  Néanmoins, ce qui vous aidera ce sont les acquis que vous faites au fur et à mesure que votre business prend forme et évolue, les livres que vous lisez, les vidéos, podcasts et autres types de cours en rapport avec le commerce digital ; et le plus important encore :<b> le passage à l’action </b>. Pour cela, voici quelques questions que vous pouvez vous poser si jamais vous décidez de démarrer votre commerce :</p>
                            <blockquote cite="http://">

                            </blockquote>
                            <div className="exampleTuto">

                            </div>

                            <ol className="enumerationTuto">
                                <li className="elementEnumereTuto"> <i className="fas fa-check symbol"></i> <span>	Quel genre de business vais-je lancer?</span> </li>
                                <li className="elementEnumereTuto"> <i className="fas fa-check symbol"></i>	<span>	Suis-je personnellement prêt•e à décoller?</span></li>
                                <li className="elementEnumereTuto"><i className="fas fa-check symbol"></i> <span>	Quels outils vont m’aider à commencer?</span> </li>
                            </ol>

                            <p className="paragrapheTuto">Prenez de quoi noter, pour construire pas à pas les bases de ce qui fera votre secteur de marché.</p>

                        </li>

                        <li>
                            <h3 className="sousTitreTuto">TROUVER UNE IDEE DE BUSINESS…</h3>
                            <img src="Assets/images/galerie/idee de business.png" className="illustrationTuto" alt="illustration avant de commencer" />
                            <p className="paragrapheTuto">C’est assez tentant de s’inspirer des besoins du marché pour décider de se lancer dans les affaires en ligne, ou encore de se concentrer sur ce qu’on sait et ce qu’on a pour démarrer. Et même en rapport avec ce sujet on entend dire – à tort ou à raison, on le verra par la suite – que ce sont la passion et la motivation qui comptent le plus au tout début de toute réalisation… Admettons...  Mais avant de répondre, gardez à l’esprit 02 choses :</p>
                            <blockquote cite="http://">

                            </blockquote>
                            <div className="exampleTuto">

                            </div>
                            <ol className="enumerationTuto">
                                <li className="elementEnumereTuto"><i className="fas fa-check symbol"></i> <span>La meilleure idée n’est pas forcément la plus innovante ou celle qui va résoudre le plus impactant des problèmes;</span></li>
                                <li className="elementEnumereTuto"><i className="fas fa-check symbol"></i> <span>Si vous voulez obtenir des réponses utiles, posez-vous les bonnes questions.</span></li>
                            </ol>

                            <p className="paragrapheTuto">Les conseils d’experts un peu comme ceux cités plus haut, sont efficaces ; mais dans ce contexte, il y a beaucoup d’éléments qui rentrent en compte et qui ne peuvent pas être négligés. Les idées, il y en a beaucoup… Un peu trop même. Et ce qui va faire la différence entre ce que vous faîtes et ce que votre voisin fera, ne va tenir qu’à un fil : <b>“ Est-ce que je peux montrer ce que je voudrais faire ? ”</b>. Ici, nul besoin de longs discours, ce qui compte et donc ce qui rend une idée crédible, c’est si la personne à qui je parle peut <b>voir, ressentir, vérifier… </b>que l’idée que j’ai, n’est pas juste abstraite. La démonstration peut concerner un accessoire, un plan, un prototype, bref une partie du bien ou du service que vous voulez concevoir. Et donc il faudrait savoir si ce que vous faîtes, vous permet facilement de montrer aux autres (vos prospects) que ça leur sera utile, que c’est du concret et que cela inspire une certaine originalité. </p>


                        </li>

                        <li>
                            <h3 className="sousTitreTuto">Se fixer un “vrai” objectif</h3>
                            <img src="Assets/images/galerie/objectif vrai.png" className="illustrationTuto" alt="illustration avant de commencer" />
                            <p className="paragrapheTuto">Ce n’est pas que les faux objectifs existent – peut-être bien, on ne sait jamais – mais le côté vrai de l’objectif dont il est question ici, réside sur quelques points que les débrouillards du net et aussi ceux des marchés savent assez bien manier. <b>Ce n’est pas parce qu’une idée est bonne, qu’elle est bonne pour vous!</b> Pour mieux le comprendre tentez donc de répondre, quelque part, à ces questions : </p>
                            <blockquote cite="http://">

                            </blockquote>
                            <div className="exampleTuto">

                            </div>
                            <ol className="enumerationTuto">
                                <li className="elementEnumereTuto"><i className="fas fa-check symbol"></i> <span>Qu’est-ce qui est facile pour vous, mais difficile pour les autres ?</span></li>
                                <li className="elementEnumereTuto"><i className="fas fa-check symbol"></i> <span>Sur quoi les gens vous demandent le plus conseil ?</span></li>
                                {/* <!-- <li className="elementEnumereTuto"><i className="fas fa-check symbol"></i> <span></span></li> --> */}
                            </ol>

                            <p className="paragrapheTuto">En d’autres termes, il serait sage de privilégier les idées où vous avez un avantage, un bonus, un plus. Parce que si votre business ne nécessite aucun effort ou aucune compétence particulière et que vous comptez vivre de ça rapidement, vous risquez vite être déçu•e. Évidemment si vous pouvez facilement construire votre commerce c’est-à-dire que votre objectif ne souligne pas votre talent ; eh bien, tout le monde va le faire ; et le marché risque vite devenir tellement saturé qu’il n’y aura plus moyen de vraiment se faire de l’argent… D’où l’importance pour vous d’avoir un avantage.
Pour que les choses soient plus claires, l’objectif que vous devez vous fixer ne dépend pas encore de votre ambition, mais de ce que vous êtes prêt•e à faire pour que le minimum soit viable. Prenons un exemple : <span id="exempleTuto"> Aïcha voudrait lancer sa start-up ; son objectif de départ, devenir une entreprise de textile connue à travers le continent ; son ‘‘vrai’’ objectif de départ pourrait être, fournir du tissu à 10 personnes inconnues qu’elle aurait su convaincre. </span>Ça paraît stupide et trop facile, mais c’est la méthode la plus sage et la plus simple pour découvrir graduellement votre avantage. A partir de cet avantage vous pourrez facilement atteindre votre ‘‘vrai’’ objectif, lorsque ce dernier est atteint, il devient au final votre nouveau point de départ. </p>

                        </li>

                        <li>
                            <h3 className="sousTitreTuto">ET DONC !</h3>
                            {/* <!-- <img src="Assets/images/galerie/" className="illustrationTuto" alt="illustration avant de commencer"/> --> */}
                            <p className="paragrapheTuto">En somme, pour définir un business sur internet qui soit rentable, il vous faut vous poser les <b>bonnes questions, </b>chercher une <b>idée percutante </b> et trouver le point fort qui fait votre <b>avantage </b> (sans lequel il vous sera difficile d’atteindre votre propre objectif). Si vous partez de zéro, ce dernier viendra probablement de vous, de vos compétences, vos connaissances ou encore de votre personnalité. Mais attention, tout cela ne viendra pas juste en regardant des vidéos, en lisant ce tutoriel ou encore en attendant ‘‘le bon moment’’ pour faire le premier pas, il apparaîtra en montant des projets et en remarquant là où, vous, êtes meilleur•e que les autres, là où vous pouvez facilement exprimer votre talent.</p>
                            <p className="paragrapheTuto">Sur ce; je vous donne rendez-vous dans le groupe Telegram <a href="https://t.me/makissyFAQ" className="linkTuto">t.me/makissyFAQ</a> dédié à toutes vos questions (FAQ en direct) pour plus d’informations…</p>
                            <blockquote cite="http://">

                            </blockquote>
                            <div className="exampleTuto">

                            </div>

                        </li>

                    </ol>
                </div>

            </div>
        )
    }
}
