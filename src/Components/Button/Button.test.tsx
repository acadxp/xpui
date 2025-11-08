import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  describe("Rendering", () => {
    it("should render with children", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("should render as button element by default", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should apply custom className", () => {
      render(<Button className="custom-class">Click me</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-class");
    });
  });

  describe("Variants", () => {
    it("should apply primary variant by default", () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-blue-500");
    });

    it("should apply secondary variant", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-gray-400");
    });

    it("should apply success variant", () => {
      render(<Button variant="success">Success</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-green-500");
    });

    it("should apply danger variant", () => {
      render(<Button variant="danger">Danger</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-red-500");
    });

    it("should apply outline variant", () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-transparent");
    });
  });

  describe("Sizes", () => {
    it("should apply medium size by default", () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("px-6", "py-3");
    });

    it("should apply small size", () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("px-4", "py-2");
    });

    it("should apply large size", () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("px-8", "py-4");
    });
  });

  describe("Pixelated", () => {
    it("should apply pixelated font by default", () => {
      render(<Button>Pixelated</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("font-mono");
    });

    it("should apply normal font when pixelated is false", () => {
      render(<Button pixelated={false}>Normal</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("font-sans");
    });
  });

  describe("Interactions", () => {
    it("should call onClick handler when clicked", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole("button");

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should not call onClick when disabled", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );
      const button = screen.getByRole("button");

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Disabled state", () => {
    it("should be disabled when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });

    it("should apply disabled styles", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      // Check for Tailwind's disabled state classes
      expect(button.className).toContain("disabled:opacity-50");
      expect(button.className).toContain("disabled:cursor-not-allowed");
    });
  });

  describe("Ref forwarding", () => {
    it("should forward ref to button element", () => {
      const ref = vi.fn();
      render(<Button ref={ref}>Button</Button>);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe("HTML attributes", () => {
    it("should accept type attribute", () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "submit");
    });

    it("should accept aria-label attribute", () => {
      render(<Button aria-label="Close dialog">X</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Close dialog");
    });
  });

  describe("Combined props", () => {
    it("should apply multiple props correctly", () => {
      render(
        <Button variant="success" size="lg" pixelated className="custom">
          Combined
        </Button>
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "bg-green-500",
        "px-8",
        "py-4",
        "font-mono",
        "custom"
      );
    });
  });
});
