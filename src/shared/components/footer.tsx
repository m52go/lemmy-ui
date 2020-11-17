import { Component } from 'inferno';
import { Link } from 'inferno-router';
import { i18n } from '../i18next';
import { repoUrl, joinLemmyUrl } from '../utils';
import { GetSiteResponse } from 'lemmy-js-client';

interface FooterProps {
  site: GetSiteResponse;
}

interface FooterState {}

export class Footer extends Component<FooterProps, FooterState> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    return (
      <nav class="container navbar navbar-expand-md navbar-light navbar-bg p-0 px-3 mt-2">
        <div className="navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"></li>
          </ul>
        </div>
      </nav>
    );
  }
}
