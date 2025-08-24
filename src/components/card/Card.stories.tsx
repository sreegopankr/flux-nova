import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from '../card/Card';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Heart, Share, BookmarkPlus, User, Settings, Star } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component for containing and organizing content with various styles and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
      description: 'Visual variant of the card',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size affects border radius',
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Inner padding of the card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Adds hover effects',
    },
    clickable: {
      control: 'boolean',
      description: 'Makes card clickable with hover effects',
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
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">
          This is a basic card with default styling. It contains some content and demonstrates the card component.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">
          This card has a thicker border and stands out more from the background.
        </p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">
          This card has a drop shadow that gives it an elevated appearance.
        </p>
      </div>
    ),
  },
};

// Interactive States
export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Hoverable Card</h3>
        <p className="text-gray-600">
          Hover over this card to see the lift effect and shadow change.
        </p>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Clickable Card</h3>
        <p className="text-gray-600">
          This card is clickable! Click anywhere on it to trigger an action.
        </p>
      </div>
    ),
  },
};

// Sizes and Padding
export const SmallCard: Story = {
  args: {
    size: 'sm',
    padding: 'sm',
    children: (
      <div>
        <h4 className="font-semibold mb-1">Small Card</h4>
        <p className="text-sm text-gray-600">Compact card with small padding.</p>
      </div>
    ),
  },
};

export const LargeCard: Story = {
  args: {
    size: 'lg',
    padding: 'lg',
    children: (
      <div>
        <h2 className="text-xl font-semibold mb-3">Large Card</h2>
        <p className="text-gray-600 mb-4">
          This is a large card with generous padding. Perfect for important content
          that needs more space and attention.
        </p>
        <p className="text-gray-500 text-sm">Additional content fits comfortably.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div>
        <div className="bg-blue-500 text-white p-4">
          <h3 className="font-semibold">Card with No Padding</h3>
        </div>
        <div className="p-4">
          <p className="text-gray-600">
            This card has no internal padding, allowing content to reach the edges.
            Perfect for images or custom layouts.
          </p>
        </div>
      </div>
    ),
  },
};

// Using Sub-components
export const WithSubComponents: Story = {
  name: 'Card with Header, Body, Footer',
  render: () => (
    <Card>
      <CardHeader title="User Profile" subtitle="Manage your account settings" />
      <CardBody>
        <div className="space-y-4">
          <Input label="Full Name" defaultValue="John Doe" />
          <Input label="Email" defaultValue="john@example.com" type="email" />
          <Input label="Bio" defaultValue="Software developer and coffee enthusiast" />
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-end gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const CustomHeader: Story = {
  name: 'Card with Custom Header',
  render: () => (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">@johndoe</p>
            </div>
          </div>
          <Button variant="tertiary" className="!px-2">
            <Settings size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-gray-600">
          Just shipped a new feature! Excited to see how users interact with it. 
          Building great user experiences is what motivates me every day.
        </p>
      </CardBody>
      <CardFooter>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
              <Heart size={16} />
              <span className="text-sm">24</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
              <Share size={16} />
              <span className="text-sm">5</span>
            </button>
          </div>
          <button className="text-gray-500 hover:text-yellow-500">
            <BookmarkPlus size={16} />
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
};

// Complex Examples
export const ProductCard: Story = {
  name: 'Product Card Example',
  render: () => (
    <Card hoverable className="max-w-sm">
      <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 -m-4 mb-4 rounded-t-lg"></div>
      <CardHeader title="Wireless Headphones" subtitle="Premium Audio Experience" />
      <CardBody>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-current" />
          ))}
          <span className="text-sm text-gray-500 ml-1">(128 reviews)</span>
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-2">$199.99</p>
        <p className="text-gray-600 text-sm">
          High-quality wireless headphones with noise cancellation and 30-hour battery life.
        </p>
      </CardBody>
      <CardFooter>
        <div className="flex gap-2">
          <Button variant="primary" fullWidth>
            Add to Cart
          </Button>
          <Button variant="secondary" className="!px-3">
            <Heart size={16} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const CardGrid: Story = {
  name: 'Card Grid Layout',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
      {[1, 2, 3].map((i) => (
        <Card key={i} hoverable>
          <CardHeader title={`Feature ${i}`} />
          <CardBody>
            <p className="text-gray-600">
              Description of feature {i}. This shows how cards work in a grid layout.
            </p>
          </CardBody>
          <CardFooter>
            <Button variant="tertiary" size="sm">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
  decorators: [
    (Story: any) => (
      <div style={{ padding: '20px', width: '100%', minWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};