import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import GuidGenerator from './guid-generator';


export const GuidComponent: FunctionComponent = () => <aside>
  <h2>Guid</h2>
  <p>
    <GuidGenerator title="Foo"/>
  </p>
</aside>


