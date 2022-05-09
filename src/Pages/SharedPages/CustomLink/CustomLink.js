import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    textUnderlineOffset: match ? "8px" : "none",
                    textDecoration: match ? "underline" : "none",
                    textDecorationColor: match ? "#0B0B45" : "",
                    textDecorationThickness: match ? "2px" : '',
                    color: match ? "#FFFF" : '',

                }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}
export default CustomLink;