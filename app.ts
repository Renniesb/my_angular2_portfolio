import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {AppComponent} from 'app/my-app';


 enableProdMode()

bootstrap(AppComponent)
.catch(err => console.error(err));
