import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Accordion } from "../../components/Accordion/Accordion";

describe("Accordion test", () => {
  beforeEach(() => {
    render(
      <Accordion title="Testing">
        <h4>Content</h4>
      </Accordion>
    );
  });

  test("should show title all the time", async () => {
    expect(screen.getByText(/Testing/i)).toBeInTheDocument();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/Content/i)).not.toBeInTheDocument();
  });
});
