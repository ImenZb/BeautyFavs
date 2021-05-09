
import { CategoryPipe } from 'src/app/pipes/category.pipe';
import { DayJSPipe } from 'src/app/pipes/day-js.pipe';
import { IsFollowerPipe } from 'src/app/pipes/is-follower.pipe';
import { GeolocateComponent } from './geolocate/geolocate.component';
import { HeaderComponent } from './header/header.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ModalCommentComponent } from './modal-comment/modal-comment.component';
import { PopoverCommentComponent } from './popover-comment/popover-comment.component';

export const COMPONENTS = [
    ModalAddComponent, PopoverCommentComponent, ModalCommentComponent, HeaderComponent, GeolocateComponent
];

export const PIPES = [
    DayJSPipe,
    CategoryPipe,
    IsFollowerPipe
];