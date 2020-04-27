import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import styled, {css} from 'styled-components';

import {
    EuiFlexItem,
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiPageHeader,
    EuiPageHeaderSection,
    EuiPageSideBar, EuiPanel,
    EuiTitle,
    EuiFlexGroup,
    EuiIcon,
    EuiButtonIcon,
    EuiBadge,
    EuiSpacer,
    EuiText,
    EuiButtonEmpty,
    EuiLink
} from "@elastic/eui";

import '@elastic/eui/dist/eui_theme_light.css';

import TextTruncate from 'react-text-truncate';


const Title = styled.h3`
  line-height: inherit
`;

const VoteButton = styled(EuiButtonIcon)`
  ${props => {
      let bg = "ffffff";

      switch (props.btnType) {
          case "upvote":
              bg = "#7be6a1";
              break;
          case "downvote":
              bg = "#ff7777";
              break;
          default:
              break;
      }
      
      if (props.pressed) {
          return css`
            background: ${bg} !important;
          `
      }
  }}
`;

const VoteCounter = styled.div`
    margin: auto;
`;


class SuggestionItem extends React.Component {
    render() {
        let props = this.props;
        return (
            <EuiPanel paddingSize="m">
                <EuiFlexGroup>
                    <EuiFlexItem grow={false}>

                        <EuiFlexGroup direction="column">
                            <EuiFlexItem key={0}>
                                <VoteButton pressed={props.voteStatus===1} iconType="arrowUp" color={"success"}
                                            onClick={() => props.onVote(1)}
                                            btnType={"upvote"}/>
                            </EuiFlexItem>
                            <EuiFlexItem key={1}>
                                <VoteCounter>
                                    {props.votes}
                                </VoteCounter>
                            </EuiFlexItem>
                            <EuiFlexItem key={2}>
                                <VoteButton iconType="arrowDown" color={"danger"}
                                            onClick={() => props.onVote(-1)}
                                            btnType={"downvote"}
                                            pressed={props.voteStatus===-1}/>
                            </EuiFlexItem>
                        </EuiFlexGroup>

                    </EuiFlexItem>
                    <EuiFlexItem>

                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup direction={"row"}>
                                <EuiFlexItem grow={false}>
                                    <EuiBadge>Suggestion</EuiBadge>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    <EuiTitle size="s">
                                        <Title>{props.title}</Title>
                                    </EuiTitle>

                                </EuiFlexItem>

                            </EuiFlexGroup>
                        </EuiFlexItem>

                        <EuiSpacer size="m"/>

                        <EuiFlexItem>
                            <EuiText>
                                <TextTruncate
                                    line={3}
                                    element="span"
                                    truncateText="…"
                                    text={props.description}
                                    textTruncateChild={<a href="#">More</a>}
                                />
                            </EuiText>
                        </EuiFlexItem>
                        <EuiSpacer size="s"/>

                        <EuiFlexItem grow={false}>
                            <EuiFlexGroup alignItems={"flexEnd"} justifyContent={"flexEnd"}>
                                <EuiFlexItem grow={false}>
                                    {/*<EuiButtonIcon iconType="heart" />*/}
                                    <EuiButtonEmpty
                                        size="s"
                                        onClick={() => window.alert('Button clicked')}
                                        iconType="heart">
                                        Save
                                    </EuiButtonEmpty>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    {/*<EuiButtonIcon iconType="minusInCircle" />*/}
                                    <EuiButtonEmpty
                                        size="s"
                                        onClick={() => window.alert('Button clicked')}
                                        iconType="minusInCircle">
                                        Hide
                                    </EuiButtonEmpty>
                                </EuiFlexItem>
                                <EuiFlexItem grow={false}>
                                    {/*<EuiButtonIcon iconType="alert" />*/}
                                    <EuiButtonEmpty
                                        size="s"
                                        onClick={() => window.alert('Button clicked')}
                                        iconType="alert">
                                        Report
                                    </EuiButtonEmpty>
                                </EuiFlexItem>
                            </EuiFlexGroup>
                        </EuiFlexItem>

                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPanel>
        );
    }
}

export default SuggestionItem;
