/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import { Button, ButtonGroup } from "@blueprintjs/core";
import * as React from "react";

export interface IAlignSelectProps {
    align: "left" | "right" | "center" | undefined;
    onChange: (align: IAlignSelectProps["align"]) => void;
}

export class AlignmentSelect extends React.PureComponent<IAlignSelectProps> {
    public render() {
        const { align } = this.props;
        return (
            <div>
                Button alignment
                <ButtonGroup fill={true} style={{ marginTop: 5 }}>
                    <Button active={align === "left"} text="Left" onClick={this.handleAlignLeft} />
                    <Button
                        active={align == null || align === "center"}
                        text="Center"
                        onClick={this.handleAlignCenter}
                    />
                    <Button active={align === "right"} text="Right" onClick={this.handleAlignRight} />
                </ButtonGroup>
            </div>
        );
    }

    private handleAlignLeft = () => this.props.onChange("left");
    private handleAlignCenter = () => this.props.onChange("center");
    private handleAlignRight = () => this.props.onChange("right");
}
