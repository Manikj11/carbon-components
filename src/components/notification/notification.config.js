'use strict';

const { componentsX } = require('../../globals/js/feature-flags');

const items = [
  {
    type: 'info',
    title: 'Notification title',
    subtitle: 'Subtitle text goes here.',
    timestamp: 'Time stamp [00:00:00]',
  },
  {
    type: 'error',
    title: 'Notification title',
    subtitle: 'Subtitle text goes here.',
    timestamp: 'Time stamp [00:00:00]',
  },
  {
    type: 'success',
    title: 'Notification title',
    subtitle:
      'Our goal is to become better at our craft and raise our collective knowledge by sharing experiences, best practices, what we have recently learned or what we are working on.',
    timestamp: 'Time stamp [00:00:00]',
  },
  {
    type: 'warning',
    title: 'Notification title',
    subtitle: 'Subtitle text goes here.',
    timestamp: 'Time stamp [00:00:00]',
  },
];

module.exports = {
  variants: [
    {
      name: 'default',
      label: 'Inline Notification',
      context: {
        variant: 'inline',
        items,
        componentsX,
      },
    },
    {
      name: 'toast',
      label: 'Toast Notification',
      notes: `
        Toast notifications are typically passive, meaning they won't affect the user's workflow if not addressed.
        Toast Notifications use 'kind' props to specify the kind of notification that should render (error, info, success, warning).
      `,
      context: {
        variant: 'toast',
        items,
        componentsX,
      },
    },
  ],
};
