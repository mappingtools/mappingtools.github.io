import React from 'react';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/AnnouncementBar/Content';

export default function AnnouncementBarContent(props: Props) {
  return (
    <div {...props}>
      {translate(
        {
          id: 'announcement.join',
          message: 'Join the Mapping Tools community on {discord} for support and discussion.',
        },
        {
          discord: <a href="https://discord.gg/YfjKN2yjQV">Discord</a>,
        },
      )}
    </div>
  );
}
