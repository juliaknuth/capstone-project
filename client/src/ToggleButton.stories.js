import React from 'react';
import { action } from '@storybook/addon-actions';
import ToggleButton from './ToggleButton'
import withMobileWrapper from '../.storybook/withMobileWrapper'

export default {
  title: 'ToggleButton',
  component: ToggleButton,
  decorators: [ withMobileWrapper ]
};

export const Simple = () => <ToggleButton 
  defaultText="Simple"
  activeText="Simple active"
  onClick={action('onClick')} />

export const LongText = () => <ToggleButton 
  defaultText="Lorem ipsum dolor sit foo bar baz"
  activeText="Simple active"
  onClick={action('onClick')} />

export const IsActive = () => <ToggleButton 
  defaultText="I am not shown" 
  activeText="I am active" 
  onClick={action('onClick')} 
  isActive />
