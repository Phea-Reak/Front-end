import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock Clerk so App can render in tests without a real Clerk provider
jest.mock("@clerk/clerk-react", () => ({
  useUser: () => ({ user: null, isSignedIn: false }),
  useClerk: () => ({ signOut: jest.fn() }),
}));

test("renders header logo", () => {
  render(<App />);
  // Header shows the KR STORE logo text
  const logoElement = screen.getByText(/KR STORE/i);
  expect(logoElement).toBeInTheDocument();
});
