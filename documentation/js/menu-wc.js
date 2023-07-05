'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tecsa documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' :
                                            'id="xs-controllers-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' :
                                        'id="xs-injectables-links-module-AppModule-ea338a96d029862f3e30114cd63b906ab47486922a0c692610dd1772c98b5ae55d4a378059f6473993a8d8743df5d8520392c77fb8c1345674e98b477bc3601e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' :
                                            'id="xs-controllers-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' :
                                        'id="xs-injectables-links-module-AuthModule-bc23b059fd29fc67b6c208f67d97a60cf1d1d11995d7fd622de9ee849a2626b7282e10d02091094f64f3a7d7ce6c243c851a44f4233ee7bd7bffdc973f6ebc5f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-96013610db780e0fbdf860ca4388f1d78642c64bef30ed45471f09d324f7a1d56c529c6af01c538889cbe213e2e5647078a5c0a68d5ed104e85b1cb0ccbf9e29"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-96013610db780e0fbdf860ca4388f1d78642c64bef30ed45471f09d324f7a1d56c529c6af01c538889cbe213e2e5647078a5c0a68d5ed104e85b1cb0ccbf9e29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-96013610db780e0fbdf860ca4388f1d78642c64bef30ed45471f09d324f7a1d56c529c6af01c538889cbe213e2e5647078a5c0a68d5ed104e85b1cb0ccbf9e29"' :
                                        'id="xs-injectables-links-module-PrismaModule-96013610db780e0fbdf860ca4388f1d78642c64bef30ed45471f09d324f7a1d56c529c6af01c538889cbe213e2e5647078a5c0a68d5ed104e85b1cb0ccbf9e29"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' :
                                            'id="xs-controllers-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' :
                                        'id="xs-injectables-links-module-UsersModule-a450093ca86178188aabf9fd04d79ab9924564c2aa3ce7f1c8632c37a23466e14f882c798a1544e254f588fbc7a91323a34be6c2640a858e69d1a50f86ea61ab"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginRequestBody.html" data-type="entity-link" >LoginRequestBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthorizedError.html" data-type="entity-link" >UnauthorizedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaInterceptor.html" data-type="entity-link" >PrismaInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnauthorizedInterceptor.html" data-type="entity-link" >UnauthorizedInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthRequest.html" data-type="entity-link" >AuthRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPayload.html" data-type="entity-link" >UserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserToken.html" data-type="entity-link" >UserToken</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});