import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { IoLogoBitcoin } from "react-icons/io";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import numberWithCommas from "../helpers/format-number";
import { throttle } from "lodash";
import * as TickerActions from "../redux/actions/actions";
import { wsconnect } from "../server/app";
import {
  StyledButton,
  Line,
  Side,
  BitCoinIcon,
  Container,
  Wrapper
} from "../components/component.styles";

const Ticker = connect((s) => ({ ticker: s.ticker }))((props) => {
  const { ticker } = props;
  const empty_ticker = [0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  const saveTicker = useCallback(
    throttle((b) => props.dispatch(TickerActions.saveTicker(b)), 500)
  );
  const [
    CHANNEL_ID,
    [DAILY_CHANGE, DAILY_CHANGE_PERC, LAST_PRICE, VOLUME, HIGH, LOW],
  ] = Array.isArray(ticker) ? ticker : empty_ticker;
  const [connectionStatus, setConnectionStatus] = useState(true);

  useEffect(() => {
    wsconnect({ saveTicker, setConnectionStatus, connectionStatus });
  }, [connectionStatus]);
  const startConnection = () => !connectionStatus && setConnectionStatus(true)
  const stopConnection = () => connectionStatus && setConnectionStatus(false)
  return (
      <Wrapper>
        <Container>
          <BitCoinIcon>
            <IoLogoBitcoin />
          </BitCoinIcon>
          <Side>
            <h4>BTC/USD</h4>
            <Line>VOL {VOLUME && numberWithCommas(VOLUME.toFixed(2))} USD</Line>
            <Line>Low {LOW && numberWithCommas(LOW.toFixed(1))}</Line>
          </Side>
          <Side>
            <h4>{LAST_PRICE && numberWithCommas(LAST_PRICE.toFixed(1))}</h4>
            <Line>
              <span className={DAILY_CHANGE_PERC < 0 ? `red` : "green"}>
                {DAILY_CHANGE && numberWithCommas(DAILY_CHANGE.toFixed(2))}
                {DAILY_CHANGE_PERC < 0 ? <FaCaretDown /> : <FaCaretUp />}(
                {DAILY_CHANGE_PERC}%)
              </span>
            </Line>
            <Line>High {HIGH && numberWithCommas(HIGH.toFixed(1))}</Line>
          </Side>
        </Container>
        <StyledButton onClick={startConnection}>Connect</StyledButton>
        <StyledButton onClick={stopConnection}>Disconnect</StyledButton>
      </Wrapper>
  );
});

export default Ticker;
