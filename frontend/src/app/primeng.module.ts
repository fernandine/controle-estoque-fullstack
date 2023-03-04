import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';

import { DataViewModule } from 'primeng/dataview';
import { DeferModule } from 'primeng/defer';
import { DialogModule } from 'primeng/dialog';
import { DragDropModule } from 'primeng/dragdrop';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';

import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import {BadgeModule} from 'primeng/badge';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';



@NgModule({
  imports: [CommonModule],
  exports: [
    DynamicDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StyleClassModule,
    CalendarModule,
    ChipsModule,
    InputTextModule,
    DividerModule,
    ListboxModule,
    MultiSelectModule,
    RadioButtonModule,
    SliderModule,
    SelectButtonModule,
    DropdownModule,
    TriStateCheckboxModule,
    AutoCompleteModule,
    CheckboxModule,
    ColorPickerModule,
    EditorModule,
    RippleModule,
    InputSwitchModule,
    InputTextareaModule,
    InputMaskModule,
    PasswordModule,
    RatingModule,
    SpinnerModule,
    ToggleButtonModule,
    ButtonModule,
    SplitButtonModule,
    CarouselModule,
    OrganizationChartModule,
    PickListModule,
    TableModule,
    TreeTableModule,
    DataViewModule,
    OrderListModule,
    PaginatorModule,
    BadgeModule,
    TreeModule,
    AccordionModule,
    FieldsetModule,
    ScrollPanelModule,
    TabViewModule,
    CardModule,
    PanelModule,
    ToolbarModule,
    ConfirmDialogModule,
    LightboxModule,
    OverlayPanelModule,
    DialogModule,
    SidebarModule,
    TooltipModule,
    FileUploadModule,
    MenuModule,
    ContextMenuModule,
    PanelMenuModule,
    StepsModule,
    TieredMenuModule,
    BreadcrumbModule,
    MegaMenuModule,
    MenubarModule,
    SlideMenuModule,
    TabMenuModule,
    InputNumberModule,
    MessagesModule,
    MessageModule,
    GalleriaModule,
    DragDropModule,
    ProgressBarModule,
    CodeHighlighterModule,
    ProgressSpinnerModule,
    DeferModule,
    KeyFilterModule,
    ToastModule,
  ]
})
export class PrimeNgModule {

}
