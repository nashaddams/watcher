import type { SVGProps } from "react";
import { styled } from "styled-components";

const SvgSearch = styled.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8px;
  margin: auto;
  height: 20px;
`;

const SvgClear = styled.svg`
  position: absolute;
  top: 0;
  right: 12px;
  bottom: 0;
  margin: auto;
  height: 20px;
  cursor: pointer;
`;

const SvgAdd = styled.svg`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const SvgAdded = styled.svg`
  height: 20px;
  width: 20px;
`;

const SvgRemove = styled.svg`
  height: 20px;
  width: 20px;
  margin-right: 12px;
  cursor: pointer;
`;

export const Icon = {
  Search: () => (
    <SvgSearch
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
      </path>
    </SvgSearch>
  ),
  Clear: (props: SVGProps<SVGSVGElement>) => (
    <SvgClear
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      {...props}
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z">
      </path>
    </SvgClear>
  ),
  Add: (props: SVGProps<SVGSVGElement>) => (
    <SvgAdd
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      {...props}
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z">
      </path>
    </SvgAdd>
  ),
  Added: (props: SVGProps<SVGSVGElement>) => (
    <SvgAdded
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#388E3C"
      {...props}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z">
      </path>
    </SvgAdded>
  ),
  Remove: (props: SVGProps<SVGSVGElement>) => (
    <SvgRemove
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      {...props}
    >
      <path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9ZM9 12V18H11V12H9ZM13 12V18H15V12H13Z">
      </path>
    </SvgRemove>
  ),
};
