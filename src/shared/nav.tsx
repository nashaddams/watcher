import { Link as BaseLink, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import useDetectScroll from "@smakss/react-scroll-direction";

const Wrapper = styled.nav<{ hide: boolean }>`
  position: fixed;
  bottom: ${({ hide }) => hide ? "-100px" : "16px"};
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  gap: 20px;
  justify-items: center;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(3px);
  border: solid rgba(255, 255, 255, 0.05) 2px;
  border-radius: 48px;
  padding: 8px 22px;

  transition: bottom 0.3s ease-in-out;
`;

const Link = styled(BaseLink)<{ selected?: boolean }>`
  filter: none;
  text-decoration: none;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 4px;
  cursor: pointer;
  color: white;
  opacity: ${({ selected }) => selected ? 1 : 0.6};
`;

const Svg = styled.svg`
  height: 22px;
  width: auto;
  justify-self: center;
`;

const Text = styled.div`
  font-size: 0.6rem;
  font-weight: 600;
`;

const Icon = {
  Library: () => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H14C14.5523 21 15 20.5523 15 20V15.2973L15.9995 19.9996C16.1143 20.5398 16.6454 20.8847 17.1856 20.7699L21.0982 19.9382C21.6384 19.8234 21.9832 19.2924 21.8684 18.7522L18.9576 5.0581C18.8428 4.51788 18.3118 4.17304 17.7716 4.28786L14.9927 4.87853C14.9328 4.38353 14.5112 4 14 4H10C10 3.44772 9.55228 3 9 3H4ZM10 6H13V14H10V6ZM10 19V16H13V19H10ZM8 5V15H5V5H8ZM8 17V19H5V17H8ZM17.3321 16.6496L19.2884 16.2338L19.7042 18.1898L17.7479 18.6057L17.3321 16.6496ZM16.9163 14.6933L15.253 6.86789L17.2092 6.45207L18.8726 14.2775L16.9163 14.6933Z">
      </path>
    </Svg>
  ),
  Recent: () => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z">
      </path>
    </Svg>
  ),
  Upcoming: () => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M7 3V1H9V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V9H20V5H17V7H15V5H9V7H7V5H4V19H10V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7ZM17 12C14.7909 12 13 13.7909 13 16C13 18.2091 14.7909 20 17 20C19.2091 20 21 18.2091 21 16C21 13.7909 19.2091 12 17 12ZM11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16ZM16 13V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V13H16Z">
      </path>
    </Svg>
  ),
  Trending: () => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z">
      </path>
    </Svg>
  ),
};

export function Nav() {
  const { pathname } = useLocation();
  const { scrollDir } = useDetectScroll({ thr: 100 });

  return (
    <Wrapper hide={scrollDir === "down"}>
      <Link to="/library" selected={pathname === "/library"}>
        <Icon.Library />
        <Text>Library</Text>
      </Link>
      <Link to="/" selected={pathname === "/"}>
        <Icon.Recent />
        <Text>Recent</Text>
      </Link>
      <Link to="/upcoming" selected={pathname === "/upcoming"}>
        <Icon.Upcoming />
        <Text>Upcoming</Text>
      </Link>
      <Link to="/trending" selected={pathname === "/trending"}>
        <Icon.Trending />
        <Text>Trending</Text>
      </Link>
    </Wrapper>
  );
}
