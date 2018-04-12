/*
 * Copyright (C) 2017 ZeXtras S.r.l.
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2 of
 * the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License.
 * If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";

import "./MessageReceived.scss";

import {AMessage, IAMessageProps, IAMessageState} from "./AMessage";

interface IMessageReceivedProps extends IAMessageProps {}

interface IMessageReceivedState extends IAMessageState {}

export class MessageReceived extends AMessage<IMessageReceivedProps, IMessageReceivedState> {

  public render(): JSX.Element | false | null {
    return (
      <div className="MessageReceived">
        <div className="MessageReceived-content-triangle-left"/>
        <div className="MessageReceived-content-container">
          <div className="MessageReceived-info">
            <div className="MessageReceived-info-sender">
              {this.props.username}
            </div>
            {this.getDateEl()}
          </div>
          <div className="MessageReceived-content">
            {this.props.children}
          </div>
          {this.getStatusIconEl()}
        </div>
      </div>
    );
  }

}
