import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Search, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with variants, sizes, icons, and validation states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Visual variant of the input',
    },
    inputSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width of container',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text shown below the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '300px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Stories
export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'your.email@example.com',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username (3-20 characters)',
  },
};

// Variants
export const ErrorState: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    variant: 'error',
    helperText: 'Password must be at least 8 characters long',
  },
};

export const SuccessState: Story = {
  args: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    variant: 'success',
    helperText: 'Email is available!',
    defaultValue: 'john@example.com',
  },
};

// Sizes
export const SmallSize: Story = {
  args: {
    inputSize: 'sm',
    label: 'Small Input',
    placeholder: 'Small size',
  },
};

export const MediumSize: Story = {
  args: {
    inputSize: 'md',
    label: 'Medium Input',
    placeholder: 'Medium size (default)',
  },
};

export const LargeSize: Story = {
  args: {
    inputSize: 'lg',
    label: 'Large Input',
    placeholder: 'Large size',
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for anything...',
    leftIcon: <Search size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'your.email@example.com',
    rightIcon: <Mail size={16} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    leftIcon: <User size={16} />,
    rightIcon: <Eye size={16} />,
  },
};

// States
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    helperText: 'This field is currently unavailable',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
    helperText: 'Input expands to container width',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '600px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

// Complex Examples
export const LoginForm: Story = {
  name: 'Login Form Example',
  render: () => (
    <div style={{ width: '300px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Input
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          leftIcon={<Mail size={16} />}
          fullWidth
        />
      </div>
      <div>
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          leftIcon={<Lock size={16} />}
          rightIcon={<EyeOff size={16} />}
          fullWidth
        />
      </div>
    </div>
  ),
};

export const ValidationStates: Story = {
  name: 'All Validation States',
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        label="Default State"
        placeholder="Normal input"
        helperText="Enter any text"
      />
      <Input
        label="Error State"
        placeholder="Invalid input"
        variant="error"
        helperText="This field has an error"
        defaultValue="invalid@"
      />
      <Input
        label="Success State"
        placeholder="Valid input"
        variant="success"
        helperText="Perfect! This is valid"
        defaultValue="valid@example.com"
      />
    </div>
  ),
};