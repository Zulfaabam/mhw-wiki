export interface ProfileMenuProps {
  className?: string;
  username?: string;
  email?: string;
  onSignOut?: () => void;
}

const ProfileMenu = ({
  className,
  username,
  email,
  onSignOut,
}: ProfileMenuProps) => {
  return (
    <div
      id="dropdownTop"
      className={`"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44" ${className}`}
    >
      <div className="px-4 py-3 text-sm text-gray-900 ">
        <div>{username}</div>
        <div className="font-medium truncate">{email}</div>
      </div>
      <ul
        className="py-2 text-sm text-gray-700 "
        aria-labelledby="dropdownTopButton"
      >
        <li>
          <button
            className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
            onClick={onSignOut}
          >
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
