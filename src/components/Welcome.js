import React ,{components} from "react";
class Welcome extends components {
    render() {
        return (
            <h1>
                Welcome {this.props.name} luvutse {this.props.heroName}
            </h1>
        );
}
}
export default Welcome;