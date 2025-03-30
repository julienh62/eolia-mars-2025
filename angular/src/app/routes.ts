import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';

const routeConfig: Routes = [
    {
        path: '',
        component: UserComponent,
        title: 'Home Page'
    },
    {
        path: 'article/:id',
        component: ArticleComponent,
        title: 'Article Page'
    } 
];

export default routeConfig;