/**
 * @license
 * Copyright 2017 JBoss Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { AddConnectionComponent } from "@connections/add-connection/add-connection.component";
import { ConnectionsComponent } from "@connections/connections.component";
import { EditConnectionComponent } from "@connections/edit-connection/edit-connection.component";

export const connectionsRootPath = "/connections";
export const addConnectionPath = connectionsRootPath + "/add-connection";
export const editConnectionPath = connectionsRootPath + "/edit-connection";

const connectionsRoutes: Routes = [
  { path: connectionsRootPath, component: ConnectionsComponent },
  { path: addConnectionPath, component: AddConnectionComponent },
  { path: editConnectionPath, component: EditConnectionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( connectionsRoutes )
  ],
  exports: [
    RouterModule
  ]
})

export class ConnectionsRoutingModule {}
