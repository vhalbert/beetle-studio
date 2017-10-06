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

import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { connectionsRootPath } from "@connections/connections-routing.module";
import { ConnectionService } from "@connections/shared/connection.service";
import { NewConnection } from "@connections/shared/new-connection.model";
import { AbstractPageComponent } from "@shared/abstract-page.component";

@Component({
  selector: "app-edit-connection",
  templateUrl: "./edit-connection.component.html",
  styleUrls: ["./edit-connection.component.css"]
})
export class EditConnectionComponent extends AbstractPageComponent {

  public connectionsLink = connectionsRootPath;

  private router: Router;
  private connectionService: ConnectionService;

//  @ViewChild(AddConnectionFormComponent) form: AddConnectionFormComponent;

  constructor(router: Router, route: ActivatedRoute, connectionService: ConnectionService) {
    super(route);
    this.router = router;
    this.connectionService = connectionService;
  }

  /**
   * Called when the Add Connection form (component) emits a "add-connection" event.  This is bound to
   * from the add-connection.page.html template.
   * @param {NewConnection} connection
   */
  /*
  public onCreateConnection(connection: NewConnection) {
    console.log('[AddConnectionComponent] onCreateConnection(): ' + JSON.stringify(connection));
    this.apiService
      .createConnection(connection)
      .subscribe(
        () => {
          this.form.creatingConnection = false;
          const link: string[] = [ '/connections' ];
          console.log('[AddConnectionComponent] Navigating to: %o', link);
          this.router.navigate(link);
        }
      );

  }
  */
}
