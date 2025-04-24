import { Meta, StoryObj } from '@storybook/react';
import PhoneInputT1 from '../Components/PhoneInputT1';
/**
 * `PhoneInputT1` is an enhanced international phone number input component with extensive customization options.
 *
 * This component combines a country selector with flag display and a phone number input field,
 * offering a wide range of customization options for appearance and behavior.
 *
 * ## Features
 * - Country selection with flag display and country code
 * - Optional country name display
 * - Customizable validation rules
 * - Phone number formatting based on country
 * - Rich styling options (borders, colors, sizes)
 * - Support for clearable input
 * - Accessibility features
 * - Form integration capabilities
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
 * Phone input with emoji flags instead of flag images.
 * Useful when you don't want to depend on the flag library.
 */
export declare const WithEmojiFlags: Story;
/**
 * Phone input with custom styling.
 * Demonstrates how to customize the appearance of the component.
 */
export declare const CustomStyling: Story;
/**
 * Phone input with formatted number display.
 * Shows how numbers can be automatically formatted according to country standards.
 */
export declare const FormattedNumber: Story;
/**
 * Phone input with country names displayed.
 * Shows how to display country names alongside flags and prefixes.
 */
export declare const WithCountryNames: Story;
/**
 * Disabled phone input.
 * Shows the appearance and behavior of the component when disabled.
 */
export declare const DisabledState: Story;
/**
 * Interactive phone input example that demonstrates real-time validation,
 * formatting, and tracking the complete phone number with country code.
 */
export declare const Interactive: Story;
/**
 * Custom validation example.
 * Demonstrates how to implement custom validation rules.
 */
export declare const CustomValidation: Story;
/**
 * Phone input in a form context.
 * Shows multiple variations of the component inside a form.
 */
export declare const InFormContext: Story;
/**
 * All variants showcase.
 * A grid of different phone input configurations to compare appearances.
 */
export declare const VariantsShowcase: Story;
