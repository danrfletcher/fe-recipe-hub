import { LeftNavSection, NavButtonBox, RightNavSection } from "./styled-components/divs";
import { StyledHeader } from "./styled-components/header"
import { StyledLogo } from "./styled-components/headings"
import { CircleProfilePhotoIcon } from "./styled-components/images";
import { AddRecipeButton, NavSearchButton, NotificationBellButton, ThreeLineMenu } from "./styled-components/react-bootstrap-icons";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <LeftNavSection>
        <NavButtonBox>
          <ThreeLineMenu />
        </NavButtonBox>
        <StyledLogo>Umami</StyledLogo>  
      </LeftNavSection>
      <RightNavSection>
        <NavButtonBox>
          <AddRecipeButton />
        </NavButtonBox>
        <NavButtonBox>
          <NavSearchButton />
        </NavButtonBox>
        <NavButtonBox>
          <NotificationBellButton />
        </NavButtonBox>
        <CircleProfilePhotoIcon src="https://junkee.com/wp-content/uploads/2023/11/GettyImages-1784608979-2.jpg" />
      </RightNavSection>
    </StyledHeader>
  )
}

export default Header
