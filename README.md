# Flux Nova

A modern React UI component library with beautiful design and smooth animations.

## Installation

```bash
npm install flux-nova
```

## Usage

```tsx
import { Button, Input, Card } from 'flux-nova';

function App() {
  return (
    <Card padding="lg">
      <Input 
        label="Email" 
        placeholder="Enter your email"
        variant="default"
      />
      <Button variant="primary" size="md">
        Submit
      </Button>
    </Card>
  );
}
```

## Components

### Button
- **Variants**: primary, secondary, tertiary, danger, success, warning  
- **Sizes**: sm, md, lg, xl
- **Features**: loading states, icons, full width

### Input
- **Variants**: default, error, success
- **Sizes**: sm, md, lg  
- **Features**: labels, helper text, icons

### Card
- **Variants**: default, outlined, elevated
- **Features**: hoverable, clickable, flexible padding
- **Sub-components**: CardHeader, CardBody, CardFooter

## Requirements

- React >= 18.0.0
- TailwindCSS (for styling)

## License

MIT