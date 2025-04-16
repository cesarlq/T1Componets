import { Meta, StoryObj } from '@storybook/react';
import PhoneInputT1 from '../Components/PhoneInputT1';
/**
 * `PhoneInputT1` is an international phone number input component with country selection.
 *
 * This component combines a country selector with flag display and a phone number input field.
 * It provides validation, formatting, and a standardized way to collect phone numbers with
 * their corresponding country code.
 *
 * ## Features
 * - Country selection with flag display and country code
 * - Input validation for phone numbers
 * - Customizable country list
 * - Error state and helper text support
 * - Controlled and uncontrolled usage
 *
 * @component
 */
declare const meta: Meta<typeof PhoneInputT1>;
export default meta;
type Story = StoryObj<typeof PhoneInputT1>;
/**
 * Default implementation of the phone input component.
 * Shows the component with default settings and Mexico as the initial country.
 */
export declare const Default: Story;
/**
 * Phone input with a pre-filled number.
 * This example shows how the component appears with an initial value.
 */
export declare const WithInitialValue: Story;
/**
 * Phone input in error state.
 * This example demonstrates validation feedback.
 */
export declare const WithError: Story;
/**
 * Phone input with custom country list.
 * This example demonstrates how to provide a custom set of countries.
 */
export declare const WithCustomCountries: Story;
/**
 * Interactive phone input example that demonstrates real-time validation
 * and tracks the complete phone number with country code.
 */
export declare const Interactive: Story;
/**
 * Phone input in a form context.
 * This example shows how the component can be used within a form.
 */
export declare const InFormContext: Story;
