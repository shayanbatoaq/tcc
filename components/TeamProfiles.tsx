"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { MouseEvent, useEffect, useRef, useState } from "react";

export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  description: string;
  profile: string[];
  image?: string;
  imageAlt?: string;
  avatarScale?: number;
  avatarPosition?: string;
  avatarOrigin?: string;
};

function LensIcon({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className="lens-icon"
      aria-hidden="true"
      style={{
        position: "relative",
        display: "block",
        width: "2rem",
        height: "2rem",
        flex: "0 0 auto",
        overflow: "hidden",
        borderRadius: "50%",
        backgroundColor: onDark ? "#ffd42a" : undefined,
      }}
    >
      <Image
        src="/the-corporate-lens-logo.png"
        alt=""
        width={90}
        height={90}
        sizes="90px"
        style={{
          position: "absolute",
          top: "-28.4px",
          left: "-1.5px",
          width: "90px",
          maxWidth: "none",
          height: "90px",
          mixBlendMode: onDark ? "difference" : undefined,
        }}
      />
    </span>
  );
}

function profileId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function TeamProfiles({ members }: { members: TeamMember[] }) {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!activeMember || !dialog) {
      return;
    }

    if (!dialog.open) {
      dialog.showModal();
    }

    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMember]);

  function openProfile(member: TeamMember, event: MouseEvent<HTMLButtonElement>) {
    triggerRef.current = event.currentTarget;
    setActiveMember(member);
  }

  function finishClose() {
    setActiveMember(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function closeProfile() {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
      return;
    }

    finishClose();
  }

  const activeId = activeMember ? profileId(activeMember.name) : "profile";

  return (
    <>
      <div className="team-grid" style={{ gridAutoRows: "1fr" }}>
        {members.map((member, index) => (
          <button
            key={member.name}
            type="button"
            className={`team-card${index % 2 === 0 ? " team-card-gold" : ""}`}
            style={{ height: "100%" }}
            aria-haspopup="dialog"
            aria-controls="team-profile-dialog"
            aria-expanded={activeMember?.name === member.name}
            onClick={(event) => openProfile(member, event)}
          >
            <span className="team-card-head">
              {member.image ? (
                <span
                  className="initials"
                  style={{
                    position: "relative",
                    width: "5.5rem",
                    flex: "0 0 auto",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.imageAlt ?? `Portrait of ${member.name}`}
                    fill
                    sizes="88px"
                    style={{
                      objectFit: "cover",
                      objectPosition: member.avatarPosition,
                      transform: `scale(${member.avatarScale ?? 1})`,
                      transformOrigin: member.avatarOrigin,
                    }}
                  />
                </span>
              ) : (
                <span className="initials">{member.initials}</span>
              )}
              <LensIcon onDark={index % 2 !== 0} />
            </span>
            <span className="team-card-name" role="heading" aria-level={3}>
              {member.name}
            </span>
            <span className="team-role">{member.role}</span>
            <span className="team-bio">{member.description}</span>
            <span className="team-card-action">
              View full profile <ArrowUpRight aria-hidden="true" size={17} />
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        id="team-profile-dialog"
        className="profile-dialog"
        aria-labelledby={`profile-title-${activeId}`}
        aria-describedby={`profile-role-${activeId}`}
        onCancel={(event) => {
          event.preventDefault();
          closeProfile();
        }}
        onClose={finishClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeProfile();
          }
        }}
      >
        {activeMember ? (
          <article className="profile-modal">
            <aside className="profile-modal-aside" aria-label={`${activeMember.name} portrait`}>
              <div className="profile-modal-portrait">
                {activeMember.image ? (
                  <Image
                    src={activeMember.image}
                    alt={activeMember.imageAlt ?? `Portrait of ${activeMember.name}`}
                    fill
                    sizes="(max-width: 699px) 180px, 260px"
                    style={{
                      objectFit: "cover",
                      objectPosition: activeMember.avatarPosition ?? "center",
                    }}
                  />
                ) : (
                  <span className="profile-modal-initials">{activeMember.initials}</span>
                )}
              </div>
              <span className="profile-modal-aside-label">The Corporate Lens</span>
            </aside>

            <div className="profile-modal-body">
              <button
                ref={closeButtonRef}
                type="button"
                className="profile-modal-close"
                aria-label="Close profile"
                onClick={closeProfile}
              >
                <X aria-hidden="true" size={24} />
              </button>
              <p className="eyebrow">Editorial board profile</p>
              <h2 id={`profile-title-${activeId}`}>{activeMember.name}</h2>
              <p id={`profile-role-${activeId}`} className="profile-modal-role">
                {activeMember.role}
              </p>
              <div className="profile-modal-copy">
                {activeMember.profile.map((paragraph, index) => (
                  <p key={`${activeId}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ) : null}
      </dialog>
    </>
  );
}
