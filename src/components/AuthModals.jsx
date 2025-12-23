import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

const AuthModals = ({ showModal, onClose }) => {
  if (!showModal) return null;

  const isSignIn = showModal === "signin";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          background: "#fff",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            border: "none",
            background: "transparent",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {isSignIn ? (
          <SignIn
            routing="virtual"
            appearance={{
              elements: {
                footer: "hidden", // remove Clerk footer links
              },
            }}
          />
        ) : (
          <SignUp
            routing="virtual"
            appearance={{
              elements: {
                footer: "hidden",
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModals;
