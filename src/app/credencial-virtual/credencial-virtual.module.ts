import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialVirtualPageRoutingModule } from './credencial-virtual-routing.module';

import { CredencialVirtualPage } from './credencial-virtual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialVirtualPageRoutingModule
  ],
  declarations: [CredencialVirtualPage]
})
export class CredencialVirtualPageModule {}
