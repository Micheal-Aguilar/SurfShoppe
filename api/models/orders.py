from pydantic import BaseModel


class OrderIn(BaseModel):
    surfboard_shaper: str
    surfboard_model: str
    surfboard_length: float
    surfboard_width: float
    surfboard_thickness: float
    surfboard_construction: str
    surfboard_fin_system: str
    surfboard_fin_count: int
    surfboard_tail_style: str
    surfboard_glassing: str
    surfboard_desc: str | None


class OrderOut(BaseModel):
    order_id: str | int
    # order_date: str
    order_status: str
    customer_username: str
    surfboard_shaper: str
    surfboard_model: str
    surfboard_length: float
    surfboard_width: float
    surfboard_thickness: float
    surfboard_construction: str
    surfboard_fin_system: str
    surfboard_fin_count: int
    surfboard_tail_style: str
    surfboard_glassing: str
    surfboard_desc: str | None


class OrderUpdate(BaseModel):
    order_status: str


class OrdersOut(BaseModel):
    orders: list[OrderOut]
